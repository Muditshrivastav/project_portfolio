import React from "react";
import { motion } from "motion/react";
import { Award, Trophy, Compass, Star, ExternalLink, ShieldCheck, HelpCircle } from "lucide-react";
import { resumeData } from "../data/resume";

export default function CertBadgeList() {
  return (
    <section id="certifications" className="py-24 bg-[#0A0A0A] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & header stats */}
        <div className="text-left max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-none bg-blue-600/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider italic">
            <Award className="h-3.5 w-3.5 text-blue-400" />
            <span>— CREDENTIALS & COMMITS</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">
            Certifications & Activism
          </h2>
          <p className="text-neutral-400 text-sm italic font-light">
            Acquired cloud foundations, technical learning outcomes, and participations with global developer clusters.
          </p>
        </div>

        {/* Categories splits: Certs on left, Activities on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" id="cert-and-act-grid">
          
          {/* Column A: Certifications */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 pb-3 border-b border-neutral-800">
              <ShieldCheck className="h-5.5 w-5.5 text-blue-400" />
              <h3 className="text-sm font-bold text-white tracking-widest uppercase font-mono">
                Professional Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="certifications-inner-grid">
              {resumeData.achievements.certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-[#0F0F0F] border border-neutral-800 rounded-none p-4 flex items-start space-x-3.5 hover:border-blue-500/20 hover:shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all text-left"
                >
                  <div className="p-2 bg-blue-500/5 text-blue-400 border border-blue-500/10 rounded-none mt-0.5 select-none shrink-0 font-mono">
                    <Award className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">Verified ID</span>
                    <h4 className="text-sm font-bold text-neutral-200 leading-snug">
                      {cert}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column B: Activities */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 pb-3 border-b border-neutral-800">
              <Trophy className="h-5.5 w-5.5 text-blue-400" />
              <h3 className="text-sm font-bold text-white tracking-widest uppercase font-mono">
                Developer Community & Hackathons
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="activities-inner-grid">
              {resumeData.achievements.activities.map((act, index) => (
                <motion.div
                  key={act}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-[#0F0F0F] border border-neutral-800 rounded-none p-4 flex items-start space-x-3.5 hover:border-blue-500/20 hover:shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all text-left"
                >
                  <div className="p-2 bg-blue-500/5 text-blue-400 border border-blue-500/10 rounded-none mt-0.5 select-none shrink-0 font-mono">
                    <Trophy className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">Participant</span>
                    <h4 className="text-sm font-bold text-neutral-200 leading-snug">
                      {act}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
