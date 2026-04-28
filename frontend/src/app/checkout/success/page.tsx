"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, MapPin, Clock, ArrowRight, Home } from "lucide-react";

function SuccessContent() {
  const p = useSearchParams();
  const order = p.get("order") ?? "000000";
  const date = p.get("date") ?? "";
  const time = p.get("time") ?? "";
  const name = p.get("name") ?? "there";

  const formattedDate = date
    ? new Date(date + "T12:00:00").toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-burgundy-light flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-burgundy fill-burgundy-light" />
        </div>

        {/* Heading */}
        <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-2">
          Order Confirmed
        </p>
        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A0A0A] mb-3">
          Thank you, {name.split(" ")[0]}!
        </h1>
        <p className="text-[#9E7B7B] text-sm leading-relaxed mb-8">
          Your order has been received and our team is already getting started.
          We&apos;ll have it fresh and ready for pickup.
        </p>

        {/* Order card */}
        <div className="bg-white rounded-2xl border border-[rgba(26,10,10,0.06)] shadow-warm-sm p-6 text-left mb-6">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-[rgba(26,10,10,0.06)]">
            <span className="text-[#9E7B7B] text-sm">Order Number</span>
            <span className="font-playfair font-bold text-burgundy text-lg">
              #{order}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-burgundy-light flex items-center justify-center shrink-0">
                <MapPin size={14} className="text-burgundy" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#9E7B7B] uppercase tracking-wider mb-0.5">
                  Pickup Location
                </p>
                <p className="text-[#1A0A0A] text-sm font-semibold">Biteez Boutique</p>
                <p className="text-[#9E7B7B] text-xs">123 Dessert Lane, Beirut, Lebanon</p>
              </div>
            </div>

            {(formattedDate || time) && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-burgundy-light flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-burgundy" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#9E7B7B] uppercase tracking-wider mb-0.5">
                    Pickup Time
                  </p>
                  {formattedDate && (
                    <p className="text-[#1A0A0A] text-sm font-semibold">{formattedDate}</p>
                  )}
                  {time && (
                    <p className="text-[#9E7B7B] text-xs">{decodeURIComponent(time)}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Note */}
        <div className="bg-gold/10 border border-gold/20 rounded-xl px-4 py-3 mb-8 text-xs text-[#4A3728] leading-relaxed">
          ✉️ &nbsp;A confirmation will be sent to your email. For any changes
          call us at <span className="font-semibold">+961 1 234 567</span>.
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-[rgba(26,10,10,0.12)] text-[#4A3728] hover:border-burgundy hover:text-burgundy font-semibold py-3.5 rounded-2xl transition-all duration-200 active:scale-[0.97]"
          >
            <Home size={16} /> Back to Home
          </Link>
          <Link
            href="/menu"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold py-3.5 rounded-2xl transition-all duration-300 shadow-warm-sm hover:shadow-warm-lg active:scale-[0.97]"
          >
            Order Again <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-cream flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-burgundy border-t-transparent animate-spin" />
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
