import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold tracking-tighter mb-6 text-primary-foreground">Services & Pricing</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-80">
            Clear, transparent pricing for end-to-end solar compliance, certification, and automated maintenance.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 space-y-24">
        
        {/* Compliance Services */}
        <section>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Compliance Services (Once-Off)</h2>
            <p className="text-muted-foreground mt-2">Get fully registered before the September 2026 deadline.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "SSEG Full Registration Package", price: "R7,500 – R10,000", desc: "Complete end-to-end NERSA and municipal registration, including all paperwork." },
              { title: "SSEG Express", price: "R4,500 – R7,500", desc: "Upgrade and register your existing uncertified system." },
              { title: "Certificate of Compliance (CoC)", price: "R2,500 – R4,000", desc: "Independent electrical assessment and CoC issuance only." },
              { title: "Compliance Audit", price: "R1,200 – R1,800", desc: "Thorough site assessment with 48hr written report." },
              { title: "Bird & Wildlife Exclusion", price: "R1,500 – R4,000", desc: "Physical protection for your panels to prevent nesting and damage." }
            ].map((service, i) => (
              <div key={i} className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <div className="text-primary font-mono font-bold text-xl mb-3">{service.price}</div>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Subscriptions */}
        <section>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Maintenance Subscription Plans</h2>
            <p className="text-muted-foreground mt-2">Ensure peak output and avoid 40% performance drops.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Essential */}
            <div className="border border-border bg-card rounded-2xl overflow-hidden flex flex-col">
              <div className="p-8 border-b border-border bg-muted/50">
                <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Residential</div>
                <h3 className="text-2xl font-bold mb-4">Essential</h3>
                <div className="text-4xl font-bold tracking-tighter mb-2">R1,599<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
              </div>
              <div className="p-8 flex-1">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">✅ Bi-monthly robotic cleaning</li>
                  <li className="flex items-center gap-3">✅ Soiling-loss monitoring</li>
                  <li className="flex items-center gap-3">✅ Mobile diagnostics app</li>
                  <li className="flex items-center gap-3 text-muted-foreground">❌ Per-panel health map</li>
                  <li className="flex items-center gap-3 text-muted-foreground">❌ Drone thermal inspection</li>
                </ul>
                <Button className="w-full rounded-none" variant="outline">Select Plan</Button>
              </div>
            </div>

            {/* Enterprise */}
            <div className="border-2 border-primary bg-card rounded-2xl overflow-hidden flex flex-col shadow-xl transform md:-translate-y-4">
              <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-bold uppercase">Most Popular</div>
              <div className="p-8 border-b border-border">
                <div className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Commercial / SME</div>
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold tracking-tighter mb-2">R6,299<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
              </div>
              <div className="p-8 flex-1">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">✅ Bi-weekly robotic cleaning</li>
                  <li className="flex items-center gap-3">✅ Soiling-loss monitoring</li>
                  <li className="flex items-center gap-3">✅ Mobile diagnostics app</li>
                  <li className="flex items-center gap-3">✅ Per-panel health map</li>
                  <li className="flex items-center gap-3">✅ Drone thermal inspection</li>
                  <li className="flex items-center gap-3">✅ SLA & uptime guarantee</li>
                  <li className="flex items-center gap-3">✅ Annual CoC renewal included</li>
                </ul>
                <Button className="w-full rounded-none">Select Plan</Button>
              </div>
            </div>

            {/* Bespoke */}
            <div className="border border-border bg-card rounded-2xl overflow-hidden flex flex-col">
              <div className="p-8 border-b border-border bg-muted/50">
                <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Utility / Industrial</div>
                <h3 className="text-2xl font-bold mb-4">Bespoke</h3>
                <div className="text-4xl font-bold tracking-tighter mb-2">Custom</div>
              </div>
              <div className="p-8 flex-1">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">✅ Custom cleaning cadence</li>
                  <li className="flex items-center gap-3">✅ API/SCADA integration</li>
                  <li className="flex items-center gap-3">✅ Advanced per-panel mapping</li>
                  <li className="flex items-center gap-3">✅ Drone thermal inspection</li>
                  <li className="flex items-center gap-3">✅ Dedicated account manager</li>
                </ul>
                <Button className="w-full rounded-none mt-auto" variant="outline">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="bg-muted p-8 md:p-12 rounded-2xl">
          <h2 className="text-2xl font-bold tracking-tighter mb-6">À la Carte Add-Ons</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
              { title: "Drone Thermal Inspection", price: "R2,700 / scan" },
              { title: "Panel Health Report", price: "R810 / month" },
              { title: "Emergency Clean Callout", price: "R1,200 – R2,500" },
              { title: "Annual SSEG Re-registration", price: "R2,500 / year" }
            ].map((addon, i) => (
              <div key={i} className="bg-background border border-border p-4 rounded-lg flex flex-col justify-between h-full">
                <h4 className="font-bold text-sm mb-2">{addon.title}</h4>
                <div className="text-primary font-mono font-bold">{addon.price}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
