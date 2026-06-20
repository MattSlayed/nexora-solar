import React from "react";
import { motion } from "framer-motion";

// Same live NEXORA diagnostics app embedded on the App page (served statically
// from public/diagnostics-app), but here we show it at full width so it renders
// its desktop dashboard layout (sidebar + topbar).
const DIAGNOSTICS_URL =
  (import.meta.env.VITE_DIAGNOSTICS_URL as string | undefined) ||
  "/diagnostics-app/diagnostics/";

export default function Website() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tighter mb-6">The NEXORA Web Platform</h1>
          <p className="text-xl text-muted-foreground">
            The full diagnostics dashboard, live in your browser. Manage your entire array, monitor real-time production, track soiling losses, and stay SSEG-compliant — all from one command center.
          </p>
        </div>

        {/* Browser-window mockup with the live desktop dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-4 h-11 px-4 bg-secondary border-b border-border">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 h-7 rounded-md bg-background/40 px-3 text-xs text-primary-foreground/70">
                <span className="text-green-400">🔒</span>
                app.nexorasolar.co.za/diagnostics
              </div>
            </div>
            <div className="w-12" />
          </div>

          {/* Live desktop dashboard */}
          <iframe
            src={DIAGNOSTICS_URL}
            title="NEXORA Diagnostics Dashboard — live desktop preview"
            className="w-full h-[720px] border-0 bg-white"
            loading="lazy"
          />
        </motion.div>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Live dashboard — navigate the sidebar to explore the real platform
        </div>

      </div>
    </div>
  );
}
