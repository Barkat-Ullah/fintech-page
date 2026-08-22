"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Home,
  Compass,
  CreditCard,
  ShieldCheck,
  Zap,
  BarChart3,
  Layers,
  ArrowRight,
  Clock,
  RotateCcw,
  Pause,
  Play,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const quickLinks = [
  {
    title: "AI Features",
    description: "Automated expense tracking & smart budgeting analytics",
    href: "/#features",
    icon: Zap,
    badge: "Popular",
    badgeColor: "bg-[#DCFCE7] text-[#15803D]",
  },
  {
    title: "Pricing Plans",
    description: "Flexible tiers designed for individuals & scaling businesses",
    href: "/#pricing",
    icon: BarChart3,
    badge: "From $15/mo",
    badgeColor: "bg-[#E0F2FE] text-[#0369A1]",
  },
  {
    title: "Ecosystem & Integrations",
    description: "Connect seamlessly with Stripe, Plaid, PayPal & major banks",
    href: "/#about",
    icon: Layers,
    badge: "15+ Apps",
    badgeColor: "bg-[#FEF3C7] text-[#B45309]",
  },
  {
    title: "Fintech Insights",
    description: "Read latest articles on financial AI, strategy & market trends",
    href: "/#blogs",
    icon: Compass,
    badge: "New Articles",
    badgeColor: "bg-[#F3E8FF] text-[#7E22CE]",
  },
];

export default function NotFoundModule() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);
  const [countdown, setCountdown] = useState(12);
  const [isAutoRedirectActive, setIsAutoRedirectActive] = useState(true);

  // Auto-redirect timer
  useEffect(() => {
    if (!isAutoRedirectActive) return;

    if (countdown <= 0) {
      router.push("/");
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, isAutoRedirectActive, router]);

  const handleManualGoHome = () => {
    router.push("/");
  };

  return (
    <section className="relative min-h-screen w-full bg-[#F6FDFF] pt-28 lg:pt-36 pb-20 overflow-hidden flex flex-col justify-center items-center">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-[#D4E5CD]/40 via-[#D2DDEA]/30 to-[#138E5F]/10 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#D4E5CD]/30 blur-[100px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-[#EBE3D2]/30 blur-[90px] pointer-events-none -z-10 rounded-full" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#042718 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="w-full max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DCFCE7] border border-[#138E5F]/20 text-[#15803D] font-sans text-sm font-semibold tracking-wide shadow-[0_2px_12px_rgba(21,128,61,0.08)] mb-6 sm:mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#138E5F] animate-pulse" />
          <span>404 Error • Uncharted Financial Route</span>
        </motion.div>

        {/* Hero Visual 404 Centerpiece */}
        <div className="relative w-full max-w-2xl flex flex-col items-center justify-center my-2 sm:my-4">
          {/* Main 404 Typography Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center select-none"
          >
            {/* Giant 404 Number */}
            <span className="font-onest font-extrabold text-[110px] sm:text-[160px] md:text-[200px] lg:text-[220px] leading-none tracking-[-0.06em] text-[#042718] opacity-[0.08] sm:opacity-[0.07] absolute -z-10 blur-[1px]">
              404
            </span>

            <div className="flex items-center gap-2 sm:gap-6 z-10">
              <span className="font-onest font-bold text-[72px] sm:text-[110px] md:text-[140px] leading-none tracking-[-0.04em] text-[#042718]">
                4
              </span>

              {/* Central Glowing Interactive Radar/Compass Card */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1.5, -1.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-xl border border-[#042718]/10 shadow-[0_16px_40px_rgba(4,39,24,0.08)] flex items-center justify-center p-3 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#138E5F]/10 via-transparent to-[#D2DDEA]/20" />
                
                {/* Radar Ring Animation */}
                <div className="absolute inset-2 rounded-xl sm:rounded-2xl border border-[#138E5F]/20 flex items-center justify-center">
                  <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#138E5F]/30 to-transparent animate-pulse" />
                  <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#138E5F]/30 to-transparent animate-pulse" />
                </div>

                <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#042718] flex items-center justify-center shadow-[0_8px_20px_rgba(4,39,24,0.25)] group-hover:scale-105 transition-transform duration-300">
                  <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-[#DCFCE7] animate-spin [animation-duration:18s]" />
                </div>
              </motion.div>

              <span className="font-onest font-bold text-[72px] sm:text-[110px] md:text-[140px] leading-none tracking-[-0.04em] text-[#042718]">
                4
              </span>
            </div>
          </motion.div>

          {/* Floating Pill Cards (Fintech context) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="hidden md:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#042718]/10 shadow-[0_8px_24px_rgba(4,39,24,0.06)] absolute -left-12 top-6"
          >
            <div className="w-8 h-8 rounded-xl bg-[#DCFCE7] flex items-center justify-center shrink-0">
              <CreditCard className="w-4 h-4 text-[#15803D]" />
            </div>
            <div className="text-left">
              <p className="font-sans text-xs font-semibold text-[#042718]">
                Missing Ledger
              </p>
              <p className="font-sans text-[11px] text-[#042718]/60">
                Amount: $0.00
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hidden md:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#042718]/10 shadow-[0_8px_24px_rgba(4,39,24,0.06)] absolute -right-12 bottom-6"
          >
            <div className="w-8 h-8 rounded-xl bg-[#E0F2FE] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#0369A1]" />
            </div>
            <div className="text-left">
              <p className="font-sans text-xs font-semibold text-[#042718]">
                Security Safe
              </p>
              <p className="font-sans text-[11px] text-[#042718]/60">
                256-Bit Encrypted
              </p>
            </div>
          </motion.div>
        </div>

        {/* Heading & Context Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center max-w-[680px] mx-auto mt-4 sm:mt-6"
        >
          <h1 className="font-onest text-[32px] sm:text-[44px] md:text-[54px] font-semibold leading-[1.15] md:leading-[1.12] tracking-[-1.2px] md:tracking-[-1.8px] text-[#042718]">
            Lost in the{" "}
            <i className="text-[rgba(0,0,0,0.40)] font-playfair font-normal">
              financial ledger?
            </i>
          </h1>
          <p className="mt-4 sm:mt-5 font-sans text-base sm:text-[18px] font-normal leading-[24px] sm:leading-[28px] text-[#042718] opacity-80 max-w-[560px] mx-auto">
            The page you are looking for has been shifted, renamed, or never
            existed. Don&apos;t worry — your balances and assets remain safe.
          </p>
        </motion.div>

        {/* Action Buttons Hub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10 w-full sm:w-auto"
        >
          {/* Primary Action: Go to Home Button with Signature Finsyc Spring Interaction */}
          <motion.button
            onClick={handleManualGoHome}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "relative flex items-center h-[56px] min-w-[220px] sm:min-w-[240px] bg-[#042718] rounded-full group cursor-pointer transition-all duration-300 hover:bg-[#063b25] shadow-[0_8px_32px_rgba(4,39,24,0.18)] overflow-hidden gap-3",
              isHovered ? "pl-2 pr-5 flex-row-reverse" : "pl-5 pr-2 flex-row",
            )}
            id="notfound-btn-home"
          >
            <motion.span
              layout="position"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 35,
              }}
              className="font-sans text-[17px] sm:text-[18px] font-medium leading-[28px] text-white whitespace-nowrap"
            >
              Back to Home Page
            </motion.span>

            <motion.div
              layout="position"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 35,
              }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm"
            >
              <ArrowUpRight className="w-[18px] h-[18px] text-[#042718] transition-transform duration-300 group-hover:rotate-45" />
            </motion.div>
          </motion.button>

          {/* Secondary Action: Explore Features */}
          <Link
            href="/#features"
            onMouseEnter={() => setIsSecondaryHovered(true)}
            onMouseLeave={() => setIsSecondaryHovered(false)}
            className="flex items-center justify-center h-[56px] px-7 rounded-full bg-white/70 hover:bg-white backdrop-blur-md border border-[#042718]/15 text-[#042718] font-sans text-[17px] sm:text-[18px] font-medium leading-[28px] transition-all duration-300 shadow-[0_4px_20px_rgba(4,39,24,0.04)] hover:shadow-[0_8px_25px_rgba(4,39,24,0.08)] gap-2 w-full sm:w-auto"
            id="notfound-btn-explore"
          >
            <span>Explore Platform</span>
            <ArrowRight
              className={cn(
                "w-4 h-4 text-[#042718] transition-transform duration-300",
                isSecondaryHovered && "translate-x-1",
              )}
            />
          </Link>
        </motion.div>

        {/* Auto Redirect Countdown Tracker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-3 mt-6 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#042718]/5 text-xs text-[#042718]/80 font-sans"
        >
          <Clock className="w-3.5 h-3.5 text-[#138E5F]" />
          <span>
            {isAutoRedirectActive ? (
              <>
                Auto-redirecting to Home in{" "}
                <strong className="text-[#042718] font-semibold">
                  {countdown}s
                </strong>
              </>
            ) : (
              <span>Auto-redirect is paused</span>
            )}
          </span>

          <button
            onClick={() => setIsAutoRedirectActive(!isAutoRedirectActive)}
            className="ml-1 p-1 hover:bg-[#042718]/10 rounded-full text-[#042718] transition-colors"
            title={isAutoRedirectActive ? "Pause countdown" : "Resume countdown"}
            aria-label={isAutoRedirectActive ? "Pause countdown" : "Resume countdown"}
          >
            {isAutoRedirectActive ? (
              <Pause className="w-3 h-3" />
            ) : (
              <Play className="w-3 h-3" />
            )}
          </button>
        </motion.div>

        {/* Helpful Shortcut Directory */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full max-w-[1024px] mt-16 sm:mt-20 pt-12 border-t border-[#042718]/10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-3">
            <div>
              <h2 className="font-onest text-[22px] sm:text-[26px] font-semibold tracking-[-0.6px] text-[#042718]">
                Looking for something specific?
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#042718]/70 mt-1">
                Explore popular sections or head back to the main financial suite.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#138E5F] hover:text-[#042718] transition-colors group"
            >
              <span>Visit Homepage</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + index * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="flex flex-col justify-between h-full p-5 sm:p-6 rounded-[20px] bg-white border border-[#042718]/10 hover:border-[#138E5F]/40 shadow-[0_4px_20px_rgba(4,39,24,0.02)] hover:shadow-[0_12px_32px_rgba(4,39,24,0.08)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#F6FDFF] border border-[#042718]/5 flex items-center justify-center group-hover:bg-[#DCFCE7] transition-colors duration-300">
                          <Icon className="w-5 h-5 text-[#138E5F]" />
                        </div>
                        <span
                          className={cn(
                            "px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide",
                            item.badgeColor,
                          )}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="font-onest text-[17px] font-semibold text-[#042718] group-hover:text-[#138E5F] transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-[13px] leading-[18px] text-[#042718]/60 mt-1.5">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#042718]/5 flex items-center justify-between text-xs font-medium text-[#042718]/70 group-hover:text-[#138E5F]">
                      <span>Open Section</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
