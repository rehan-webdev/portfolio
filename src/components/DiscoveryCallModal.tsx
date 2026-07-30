"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar as CalendarIcon, Clock, CheckCircle2, User, Mail, Globe, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface DiscoveryCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

export function DiscoveryCallModal({ isOpen, onClose, defaultPackage }: DiscoveryCallModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow");
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM PST");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    note: defaultPackage ? `Interested in ${defaultPackage} package` : "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const dates = [
    { day: "Tomorrow", date: "May 15" },
    { day: "Thursday", date: "May 16" },
    { day: "Friday", date: "May 17" },
    { day: "Next Mon", date: "May 20" },
  ];

  const timeSlots = ["09:00 AM PST", "10:30 AM PST", "01:30 PM PST", "03:00 PM PST", "04:30 PM PST"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl glass-panel border border-[#f57a1b]/30 bg-[#12141f] p-6 md:p-8 text-slate-100 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#f57a1b]/10 text-[#f57a1b] border border-[#f57a1b]/30">
                <CalendarIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Book 30-Min Discovery Strategy Call</h3>
                <p className="text-xs text-slate-400">Directly with DevLoop Senior Design & Tech Lead</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicator */}
          {step < 3 && (
            <div className="flex items-center gap-2 mb-6 text-xs text-slate-400">
              <span className={`px-2.5 py-1 rounded-full font-medium ${step === 1 ? "bg-[#f57a1b] text-white" : "bg-white/10 text-slate-300"}`}>
                1. Select Time
              </span>
              <span className="text-slate-600">→</span>
              <span className={`px-2.5 py-1 rounded-full font-medium ${step === 2 ? "bg-[#f57a1b] text-white" : "bg-white/10 text-slate-300"}`}>
                2. Your Details
              </span>
            </div>
          )}

          {/* STEP 1: Date & Time Picker */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-[#f57a1b]" /> Choose Available Day
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {dates.map((d) => (
                    <button
                      key={d.day}
                      type="button"
                      onClick={() => setSelectedDate(d.day)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedDate === d.day
                          ? "border-[#f57a1b] bg-[#f57a1b]/15 text-white ring-1 ring-[#f57a1b]"
                          : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      <div className="text-xs font-medium text-slate-400">{d.day}</div>
                      <div className="text-sm font-bold text-white mt-1">{d.date}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#f57a1b]" /> Choose Time Slot
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-xl border text-center text-sm font-medium transition-all ${
                        selectedTime === time
                          ? "border-[#f57a1b] bg-[#f57a1b]/15 text-white ring-1 ring-[#f57a1b]"
                          : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#ffefd5]/10 border border-[#ffefd5]/20 text-xs text-[#ffefd5] flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>You will receive an instant calendar invitation + Zoom meeting link.</span>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-[#f57a1b] text-white font-semibold hover:bg-[#e0680a] transition-all flex items-center gap-2 glow-orange-sm"
                >
                  Continue to Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: User Info */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#f57a1b]" /> Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#f57a1b]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#f57a1b]" /> Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#f57a1b]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#f57a1b]" /> Current Website URL (Optional)
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://yourcompany.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#f57a1b]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Project Notes or Goals
                </label>
                <textarea
                  rows={2}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Tell us about your project goals or timeline..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#f57a1b] text-sm"
                />
              </div>

              <div className="flex items-center justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Back to times
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl bg-[#f57a1b] text-white font-semibold hover:bg-[#e0680a] transition-all flex items-center gap-2 glow-orange-sm disabled:opacity-50"
                >
                  {isSubmitting ? "Confirming..." : "Confirm Discovery Call"}
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Success Confirmation */}
          {step === 3 && (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex p-4 rounded-full bg-[#f57a1b]/20 text-[#f57a1b] border border-[#f57a1b]/40">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">Call Confirmed!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Awesome, <span className="text-[#f57a1b] font-bold">{formData.name || "friend"}</span>! We have booked your 30-minute discovery strategy session for{" "}
                <span className="text-white font-bold">{selectedDate} at {selectedTime}</span>.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-sm mx-auto text-left text-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#f57a1b]" />
                  <span>Calendar invite sent to <strong>{formData.email}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-[#f57a1b]" />
                  <span>Zoom video call link included</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
