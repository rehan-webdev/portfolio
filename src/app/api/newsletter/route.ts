import { NextResponse } from "next/server";
import { db } from "@/db";
import { newsletterSubscribers } from "@/db/schema";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Valid email address is required"),
  source: z.string().optional().default("footer"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = newsletterSchema.parse(body);

    await db
      .insert(newsletterSubscribers)
      .values({
        email: validated.email,
        source: validated.source,
      })
      .onConflictDoNothing();

    return NextResponse.json(
      {
        success: true,
        message: "Subscribed! You are now on the DevLoop priority list.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.issues[0]?.message || "Invalid email" },
        { status: 400 }
      );
    }
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
