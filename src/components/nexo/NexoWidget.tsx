import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NexoAvatar } from "./NexoAvatar";
import {
  getIntent,
  matchIntent,
  GREETING_INTENT_ID,
  type NexoAction,
  type NexoIntent,
} from "@/lib/nexo-intents";

interface Message {
  id: number;
  from: "nexo" | "user";
  text: string;
  actions?: NexoAction[];
  quickReplies?: string[];
}

export function NexoWidget() {
  const [, navigate] = useLocation();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [waving, setWaving] = useState(false);

  const idRef = useRef(0);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const nextId = () => ++idRef.current;

  const pushIntent = (intent: NexoIntent, userText?: string) => {
    setMessages((prev) => [
      ...prev,
      ...(userText ? [{ id: nextId(), from: "user" as const, text: userText }] : []),
      {
        id: nextId(),
        from: "nexo" as const,
        text: intent.reply,
        actions: intent.actions,
        quickReplies: intent.quickReplies,
      },
    ]);
  };

  const handleToggle = () => {
    setOpen((prev) => {
      const next = !prev;
      if (next) {
        setWaving(true);
        window.setTimeout(() => setWaving(false), 2400);
      }
      return next;
    });
  };

  const handleChip = (id: string) => {
    const intent = getIntent(id);
    pushIntent(intent, intent.label);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    pushIntent(matchIntent(text), text);
    setInput("");
  };

  const runAction = (a: NexoAction) => {
    if (a.navigate) navigate(a.navigate);
  };

  useEffect(() => {
    if (open && messages.length === 0) pushIntent(getIntent(GREETING_INTENT_ID));
    if (open) inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 print:hidden">
      <AnimatePresence>
        {open && (
          <motion.section
            id="nexo-panel"
            role="dialog"
            aria-label="NEXO assistant"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex h-[28rem] max-h-[70vh] w-[21rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-border bg-background shadow-2xl"
          >
            {/* Header */}
            <header className="flex shrink-0 items-center gap-2 bg-secondary px-3 py-2.5 text-secondary-foreground">
              <NexoAvatar size={36} waving={waving} animate={!reduceMotion} />
              <div className="flex-1 leading-tight">
                <p className="text-[15px] font-bold tracking-tight">NEXO</p>
                <p className="text-[10px] uppercase tracking-[2px] text-secondary-foreground/70">
                  NEXORA Assistant
                </p>
              </div>
              <button
                type="button"
                onClick={handleToggle}
                aria-label="Close NEXO assistant"
                className="flex h-7 w-7 items-center justify-center rounded-md text-secondary-foreground/80 transition-colors hover:bg-secondary-foreground/10 hover:text-secondary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto px-3 py-3" aria-live="polite">
              {messages.map((m) => (
                <div key={m.id} className={cn("flex flex-col gap-1.5", m.from === "user" ? "items-end" : "items-start")}>
                  <div
                    className={cn(
                      "max-w-[85%] rounded-lg px-3 py-2 text-[13px] leading-snug",
                      m.from === "user"
                        ? "bg-secondary text-secondary-foreground"
                        : "border border-border bg-card text-card-foreground",
                    )}
                  >
                    {m.text}
                  </div>

                  {m.actions && m.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {m.actions.map((a) =>
                        a.navigate ? (
                          <button
                            key={a.label}
                            type="button"
                            onClick={() => runAction(a)}
                            className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wide text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          >
                            {a.label}
                          </button>
                        ) : (
                          <a
                            key={a.label}
                            href={a.href}
                            className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          >
                            {a.label}
                          </a>
                        ),
                      )}
                    </div>
                  )}

                  {m.quickReplies && m.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {m.quickReplies.map((qid) => {
                        const q = getIntent(qid);
                        return (
                          <button
                            key={qid}
                            type="button"
                            onClick={() => handleChip(qid)}
                            className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] text-foreground transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          >
                            {q.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Composer */}
            <form
              onSubmit={handleSubmit}
              className="flex shrink-0 items-center gap-2 border-t border-border bg-card px-2.5 py-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask NEXO…"
                aria-label="Message NEXO"
                className="flex-1 bg-transparent px-1 text-[13px] text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <button
        ref={launcherRef}
        type="button"
        onClick={handleToggle}
        aria-label={open ? "Close NEXO assistant" : "Open NEXO assistant"}
        aria-expanded={open}
        aria-controls="nexo-panel"
        className="nexo-fab flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-[0_10px_30px_-6px_rgba(245,162,10,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {open ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <NexoAvatar size={44} waving={waving} animate={!reduceMotion} />
        )}
      </button>
    </div>
  );
}
