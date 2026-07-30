"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { agencyInfo } from "@/data/agency";
import { FinalCtaBand } from "@/components/FinalCtaBand";
import {
  Send,
  CheckCircle2,
  PhoneCall,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid business email is required"),
  company: z.string().optional(),
  websiteUrl: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budgetRange: z.string().min(1, "Please select a budget range"),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please describe your project requirements (min 10 chars)"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      projectType: "Full 3-Week Next.js Sprint",
      budgetRange: "$8,500 – $15,000",
      timeline: "Urgent (Within 3 Weeks)",
      name: "",
      email: "",
      company: "",
      websiteUrl: "",
      message: "",
    },
  });

  const selectedProjectType = watch("projectType");
  const selectedBudget = watch("budgetRange");
  const selectedTimeline = watch("timeline");

  const projectTypes = [
    "Full 3-Week Next.js Sprint",
    "High-Converting Web Design (UI/UX)",
    "Next.js App & Database Development",
    "Conversion Rate Optimization (CRO)",
    "Brand Strategy & System",
    "Monthly Care Plan / Retainer",
  ];

  const budgetRanges = ["$4,500 – $8,500", "$8,500 – $15,000", "$15,000 – $30,000", "$30,000+ Enterprise"];

  const timelines = ["Urgent (Within 3 Weeks)", "Within 1 Month", "Flexible / Next Quarter"];

  const handleNextStep = async (nextStep: 1 | 2 | 3 | 4) => {
    if (step === 3) {
      const valid = await trigger(["name", "email"]);
      if (!valid) return;
    }
    setStep(nextStep);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (res.ok && responseData.success) {
        setIsSubmitted(true);
      } else {
        setServerError(responseData.error || "Failed to submit inquiry.");
      }
    } catch {
      setServerError("An error occurred. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0b10] text-slate-100 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57a1b]/15 border border-[#f57a1b]/30 text-[#f57a1b] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Your 3-Week Sprint</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Let&apos;s Build Something Extraordinary Together
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Fill out the project scope builder below for an immediate proposal draft, or schedule a 30-minute discovery strategy session.
          </p>
        </div>

        {/* TWO COLUMN: MULTI-STEP FORM + DIRECT CONTACT SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* FORM CONTAINER */}
          <div className="lg:col-span-8 rounded-3xl glass-panel bg-[#121422] border border-[#f57a1b]/30 p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* STEP PROGRESS BAR */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs">
                  {[1, 2, 3, 4].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handleNextStep(s as any)}
                      className={`flex items-center gap-1.5 font-bold transition-all ${
                        step === s
                          ? "text-[#f57a1b]"
                          : step > s
                          ? "text-emerald-400"
                          : "text-slate-500"
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                          step === s
                            ? "bg-[#f57a1b] text-white"
                            : step > s
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                            : "bg-white/5 text-slate-500"
                        }`}
                      >
                        {s}
                      </span>
                      <span className="hidden sm:inline">
                        {s === 1 ? "Services" : s === 2 ? "Budget" : s === 3 ? "Details" : "Scope"}
                      </span>
                    </button>
                  ))}
                </div>

                {/* STEP 1: PROJECT TYPE */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">What type of project are you planning?</h3>
                      <p className="text-xs text-slate-400">Select the primary service area you need help with.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {projectTypes.map((pt) => (
                        <button
                          key={pt}
                          type="button"
                          onClick={() => setValue("projectType", pt)}
                          className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all ${
                            selectedProjectType === pt
                              ? "border-[#f57a1b] bg-[#f57a1b]/15 text-white ring-1 ring-[#f57a1b]"
                              : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{pt}</span>
                            {selectedProjectType === pt && <CheckCircle2 className="w-4 h-4 text-[#f57a1b]" />}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-xl bg-[#f57a1b] text-white font-bold text-xs hover:bg-[#e0680a] transition-all flex items-center gap-2 glow-orange-sm"
                      >
                        <span>Next: Budget & Timeline</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: BUDGET & TIMELINE */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Budget Range & Target Timeline</h3>
                      <p className="text-xs text-slate-400">This helps us tailor the exact sprint deliverables for you.</p>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Estimated Budget Range
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {budgetRanges.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setValue("budgetRange", b)}
                            className={`p-3.5 rounded-xl border text-xs font-bold transition-all text-center ${
                              selectedBudget === b
                                ? "border-[#f57a1b] bg-[#f57a1b]/15 text-white ring-1 ring-[#f57a1b]"
                                : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Desired Launch Timeline
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {timelines.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setValue("timeline", t)}
                            className={`p-3.5 rounded-xl border text-xs font-bold transition-all text-center ${
                              selectedTimeline === t
                                ? "border-[#f57a1b] bg-[#f57a1b]/15 text-white ring-1 ring-[#f57a1b]"
                                : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-bold text-slate-400 hover:text-white"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-3 rounded-xl bg-[#f57a1b] text-white font-bold text-xs hover:bg-[#e0680a] transition-all flex items-center gap-2 glow-orange-sm"
                      >
                        <span>Next: Contact Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: CONTACT INFO */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Your Contact Information</h3>
                      <p className="text-xs text-slate-400">Where should we send your custom sprint proposal?</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          {...register("name")}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#f57a1b]"
                        />
                        {errors.name && (
                          <p className="text-[11px] text-rose-400 mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          {...register("email")}
                          placeholder="sarah@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#f57a1b]"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-rose-400 mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          Company Name (Optional)
                        </label>
                        <input
                          type="text"
                          {...register("company")}
                          placeholder="Vanguard SaaS"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#f57a1b]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          Current Website URL (Optional)
                        </label>
                        <input
                          type="text"
                          {...register("websiteUrl")}
                          placeholder="https://company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#f57a1b]"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-xs font-bold text-slate-400 hover:text-white"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => handleNextStep(4)}
                        className="px-6 py-3 rounded-xl bg-[#f57a1b] text-white font-bold text-xs hover:bg-[#e0680a] transition-all flex items-center gap-2 glow-orange-sm"
                      >
                        <span>Next: Project Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: MESSAGE & SUBMIT */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Project Details & Objectives</h3>
                      <p className="text-xs text-slate-400">Tell us a bit about your goals, current bottlenecks, or desired features.</p>
                    </div>

                    <div>
                      <textarea
                        rows={4}
                        {...register("message")}
                        placeholder="e.g. We are launching a new B2B SaaS platform next month and need a high-converting Next.js site with interactive demo modals and fast load speeds..."
                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#f57a1b]"
                      />
                      {errors.message && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {serverError && (
                      <p className="text-xs text-rose-400 bg-rose-500/10 p-3 rounded-xl border border-rose-500/20">
                        {serverError}
                      </p>
                    )}

                    <div className="flex justify-between items-center pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="text-xs font-bold text-slate-400 hover:text-white"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-4 rounded-xl bg-[#f57a1b] text-white font-extrabold text-sm hover:bg-[#e0680a] transition-all flex items-center gap-2 glow-orange disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? "Submitting Scope..." : "Submit Project Scope"}</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="text-center py-12 space-y-6">
                <div className="inline-flex p-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-extrabold text-white">Project Scope Received!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you! Our senior strategy team has received your project parameters and will reach out with a detailed proposal within <strong className="text-[#f57a1b]">4 business hours</strong>.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-all"
                  >
                    Submit Another Scope
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR: CONTACT INFO & CALENDAR EMBED PLACEHOLDER */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl glass-panel bg-[#121422] border border-white/10 space-y-6">
              <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#f57a1b]" />
                Direct Agency Contact
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#f57a1b] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-bold">Email Proposal Requests</span>
                    <a href={`mailto:${agencyInfo.contactInfo.email}`} className="text-white hover:text-[#f57a1b] font-medium">
                      {agencyInfo.contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="w-4 h-4 text-[#f57a1b] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-bold">Phone / WhatsApp</span>
                    <span className="text-white font-medium">{agencyInfo.contactInfo.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#f57a1b] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-bold">San Francisco HQ</span>
                    <span className="text-slate-300">{agencyInfo.contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Calendar Scheduling Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#181a2c] to-[#0e101c] border border-[#f57a1b]/40 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-[#f57a1b] font-bold text-xs">
                <Calendar className="w-4 h-4" />
                <span>Prefer a Live Video Call?</span>
              </div>

              <h4 className="text-lg font-extrabold text-white">Book 30-Min Discovery Strategy Call</h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                Skip the back-and-forth email exchange and pick a time directly on our technical lead&apos;s calendar.
              </p>

              <a
                href={agencyInfo.contactInfo.calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-[#f57a1b] text-white font-bold text-xs hover:bg-[#e0680a] transition-all flex items-center justify-center gap-2 glow-orange-sm"
              >
                <span>Open Interactive Calendar</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <FinalCtaBand />
      </div>
    </main>
  );
}
