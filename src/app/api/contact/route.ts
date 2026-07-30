import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid business email is required"),
  company: z.string().optional(),
  websiteUrl: z.string().optional(),
  projectType: z.string().min(1, "Project type is required"),
  budgetRange: z.string().min(1, "Budget range is required"),
  timeline: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // Save to Postgres DB via Drizzle
    const [inserted] = await db
      .insert(inquiries)
      .values({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || "",
        websiteUrl: validatedData.websiteUrl || "",
        projectType: validatedData.projectType,
        budgetRange: validatedData.budgetRange,
        timeline: validatedData.timeline || "Not specified",
        message: validatedData.message,
        status: "new",
      })
      .returning();

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully! Our team will reach out within 4 hours.",
        inquiryId: inserted.id,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.issues[0]?.message || "Invalid input data" },
        { status: 400 }
      );
    }
    console.error("Error submitting contact inquiry:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
