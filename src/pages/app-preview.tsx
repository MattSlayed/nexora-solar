import React from "react";
import { motion } from "framer-motion";

// The real NEXORA diagnostics app (Next.js) is exported as a static site and
// bundled into this project under public/diagnostics-app, so it is served by the
// same dev/production server — no second process required. At phone width it
// renders its native mobile layout (header + bottom tab bar), so we embed it
// live inside the phone frame below.
// Override the URL at build/run time with VITE_DIAGNOSTICS_URL if the app is
// served from somewhere else (e.g. a separate Next.js dev server).
const DIAGNOSTICS_URL =
  (import.meta.env.VITE_DIAGNOSTICS_URL as string | undefined) ||
  "/diagnostics-app/diagnostics/";

export default function AppPreview() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tighter mb-6">Live Diagnostics App</h1>
          <p className="text-xl text-muted-foreground">
            Included with every subscription. Monitor your system's health, SSEG compliance status, and track exactly how much energy you're losing to dust and soiling in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

          {/* Live phone — embeds the actual NEXORA diagnostics app */}
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative w-[320px] h-[650px]"
            >
              {/* Side buttons (titanium rail) */}
              <div className="absolute -left-[3px] top-[110px] h-7 w-[3px] rounded-l-sm bg-zinc-700" />
              <div className="absolute -left-[3px] top-[160px] h-12 w-[3px] rounded-l-sm bg-zinc-700" />
              <div className="absolute -left-[3px] top-[220px] h-12 w-[3px] rounded-l-sm bg-zinc-700" />
              <div className="absolute -right-[3px] top-[185px] h-16 w-[3px] rounded-r-sm bg-zinc-700" />

              {/* Phone body — titanium-style frame */}
              <div className="relative h-full w-full rounded-[3.4rem] bg-gradient-to-b from-zinc-700 via-zinc-900 to-black p-[3px] shadow-2xl">
                <div className="relative h-full w-full rounded-[3.3rem] bg-black p-[10px]">
                  {/* Screen */}
                  <div className="relative h-full w-full overflow-hidden rounded-[2.7rem] bg-black">
                    {/* Live app screen */}
                    <iframe
                      src={DIAGNOSTICS_URL}
                      title="NEXORA Diagnostics App — live preview"
                      className="absolute inset-0 h-full w-full border-0 bg-white"
                      loading="lazy"
                    />

                    {/* Dynamic Island */}
                    <div className="absolute top-2.5 left-1/2 z-20 -translate-x-1/2 flex h-[20px] w-[68px] items-center justify-end gap-1 rounded-full bg-black pr-2.5">
                      <div className="h-1 w-1 rounded-full bg-zinc-800" />
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-900 ring-1 ring-zinc-800" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Live preview — tap the bottom tabs to explore the real app
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            {[
              { title: "Real-Time Soiling Index", desc: "We track exactly how much power you are losing due to dirt. When loss exceeds 10%, our robots are automatically dispatched (Enterprise plan)." },
              { title: "Live Compliance Status", desc: "Your digital CoC, NERSA registration number, and municipal approval documents are safely stored and accessible with one tap." },
              { title: "Performance Benchmarking", desc: "Compare your actual output against weather-adjusted theoretical maximums. Stop guessing if your panels are working properly." },
              { title: "Automated Scheduling", desc: "Receive push notifications before drone inspections or cleaning callouts. Manage your subscription seamlessly." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-primary text-2xl">•</span>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground pl-6">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
