import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received",
      description: "We will contact you shortly regarding your compliance audit.",
    });
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Solar panels at golden hour" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-secondary-foreground">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-bold tracking-wide mb-6 uppercase">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Compliance Deadline: Sept 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                Secure Your Solar.<br />
                <span className="text-primary">Ensure Compliance.</span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary-foreground/80 mb-10 max-w-2xl font-light">
                South Africa's first end-to-end managed service for SSEG registration, municipal approval, and robotic panel maintenance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-none" asChild>
                  <a href="/services">Book Compliance Audit</a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold rounded-none border-secondary-foreground/20 hover:bg-secondary-foreground/10 text-secondary-foreground" asChild>
                  <a href="/about">Meet The Team</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground py-12 border-b-8 border-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "8.75 GW", label: "SA Solar Installed Capacity" },
              { value: "72%", label: "Unaware of SSEG Requirement" },
              { value: "R7.2B", label: "Total Addressable Market" },
              { value: "Sept '26", label: "Enforcement Deadline" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider font-bold opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold tracking-tighter mb-6">The Grid is Changing.<br/>Are You Registered?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Most solar systems in South Africa are operating illegally. The NERSA SSEG compliance deadline is looming, and uncertified installations face municipal fines or disconnection. Meanwhile, unmaintained panels lose up to 40% efficiency due to Gauteng's dust and wildlife.
              </p>
              
              <ul className="space-y-4">
                {[
                  "The Compliance Gap: Unregistered systems risk fines",
                  "The Performance Problem: 25-40% energy loss from dirt",
                  "The Wildlife Problem: 67% report bird/pigeon damage"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground font-medium">
                    <div className="mt-1 bg-primary text-primary-foreground p-1 rounded-sm">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <img src="/images/installation.png" alt="Installation" className="w-full h-full object-cover rounded-xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">End-to-End Managed Service</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From initial audit to ongoing robotic cleaning and app monitoring, we handle the complexity so you can rely on your power.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Compliance Audit", desc: "Site assessment and 48-hour written report." },
              { step: "02", title: "Registration", desc: "We handle NERSA, municipal approval, and CoC issuance." },
              { step: "03", title: "Maintenance", desc: "Enroll in subscription for robotic panel cleaning." },
              { step: "04", title: "App Monitoring", desc: "Track live health via the NEXORA diagnostics app." }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-8 rounded-xl relative overflow-hidden group hover:border-primary transition-colors"
              >
                <div className="text-6xl font-bold text-muted-foreground/10 absolute -top-4 -right-4 transition-transform group-hover:scale-110">{s.step}</div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{s.title}</h3>
                <p className="text-muted-foreground relative z-10">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props by Segment */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center text-primary-foreground">Tailored for Every Scale</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-secondary-foreground/20 rounded-xl bg-secondary-foreground/5">
              <h3 className="text-2xl font-bold mb-4 text-primary">Homeowners</h3>
              <p className="mb-6 opacity-80">Protect your investment and stay legal.</p>
              <ul className="space-y-2 opacity-90">
                <li>• Full SSEG compliance</li>
                <li>• CoC issued</li>
                <li>• Bird-proofing</li>
                <li>• Mobile app daily monitoring</li>
              </ul>
            </div>
            
            <div className="p-8 border border-primary rounded-xl bg-primary/10 relative transform md:-translate-y-4 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold uppercase">Most Popular</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">SMEs & Commercial</h3>
              <p className="mb-6 opacity-80">SLA-backed uptime and auditable documentation.</p>
              <ul className="space-y-2 opacity-90">
                <li>• End-to-end NERSA registration</li>
                <li>• Per-panel health mapping</li>
                <li>• Drone thermal inspection</li>
                <li>• Priority emergency dispatch</li>
              </ul>
            </div>
            
            <div className="p-8 border border-secondary-foreground/20 rounded-xl bg-secondary-foreground/5">
              <h3 className="text-2xl font-bold mb-4 text-primary">Property Investors</h3>
              <p className="mb-6 opacity-80">Portfolio-level compliance management.</p>
              <ul className="space-y-2 opacity-90">
                <li>• Multi-site dashboards via app</li>
                <li>• Carbon offset documentation</li>
                <li>• Quarterly performance reports</li>
                <li>• Property value protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="bg-primary p-12 md:w-2/5 text-primary-foreground flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Beat the Deadline</h2>
              <p className="mb-8 opacity-90">Get compliant before September 2026. Request an audit today and we'll handle the rest.</p>
              <div className="space-y-4 font-mono text-sm opacity-80">
                <p>📍 Gauteng, SA</p>
                <p>✉️ compliance@nexora.co.za</p>
                <p>📞 0800 NEXORA</p>
              </div>
            </div>
            
            <div className="p-12 md:w-3/5">
              <form onSubmit={handleContact} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold">First Name</label>
                    <Input placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Last Name</label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Email</label>
                  <Input type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Property Type</label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential (Home)</SelectItem>
                      <SelectItem value="commercial">Commercial / SME</SelectItem>
                      <SelectItem value="utility">Utility / Farm</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Message</label>
                  <Textarea placeholder="Tell us about your system..." className="min-h-[100px]" />
                </div>
                <Button type="submit" className="w-full h-12 text-lg font-bold rounded-none mt-4">
                  Request Audit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
