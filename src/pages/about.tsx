import React from "react";
import { motion } from "framer-motion";

const team = [
  { name: "Bonke Mbashe", role: "Business Strategist & Solar Expert", img: "/images/team-1.png" },
  { name: "Xoliswa Ngalo", role: "Logistics, Procurement & Research", img: "/images/team-2.png" },
  { name: "Ompilela Neo Nesindande", role: "Finance", img: "/images/team-3.png" },
  { name: "Matthew Koeberg", role: "AI & Technology", img: "/images/team-1.png" },
  { name: "Nompumelelo Nhlapho", role: "Law & Compliance", img: "/images/team-2.png" },
];

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      <section className="py-24 bg-secondary text-secondary-foreground text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tighter mb-6 text-primary-foreground">The Minds Behind NEXORA</h1>
          <p className="text-xl opacity-80 leading-relaxed">
            We are a team of legal practitioners, electrical engineers, and technologists. 
            We recognized that South Africa's solar boom created a massive compliance gap—so we built the solution.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted mb-4 relative">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-multiply group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-mono text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-12">Our Values</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 text-xl font-mono uppercase tracking-widest font-bold text-muted-foreground">
            <span>Integrity</span>
            <span className="text-primary">•</span>
            <span>Excellence</span>
            <span className="text-primary">•</span>
            <span>Inclusion</span>
            <span className="text-primary">•</span>
            <span>Community</span>
          </div>
        </div>
      </section>
    </div>
  );
}
