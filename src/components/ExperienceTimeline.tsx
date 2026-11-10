import React from "react";
import { motion } from "motion/react";
import { Briefcase, GraduationCap, Calendar, Compass, Milestone, ExternalLink } from "lucide-react";
import { resumeData } from "../data/resume";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-[#0A0A0A] border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title and meta indicator */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-none bg-blue-600/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider italic">
            <Milestone className="h-3.5 w-3.5 text-blue-400" />
            <span>— TIMELINE & JOURNEY</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">
            Education & Professional Roles
          </h2>
          <p className="text-neutral-400 max-w-lg text-sm italic font-light leading-relaxed">
            A chronological layout of Mudit's technical milestones, hands-on internships, and academic journey in Computer Science.
          </p>
        </div>

        {/* Chronological Rail Container */}
        <div className="relative border-l border-neutral-800 ml-4 sm:ml-8 space-y-12 pb-4" id="timeline-container">
          
          {/* Item 1: Mexilet Technologies Internship */}
          <div className="relative pl-8 sm:pl-10" id="timeline-item-internship">
            {/* Pulsing indicator dot */}
            <span className="absolute -left-[12px] top-1.5 flex h-6 w-6 items-center justify-center rounded-none bg-neutral-900 border border-blue-500/60 shadow-[0_0_10px_rgba(37,99,235,0.2)]">
              <Briefcase className="h-3 w-3 text-blue-400" />
            </span>

            {/* Content card */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-[#0F0F0F] border border-neutral-800 rounded-none p-6 hover:border-blue-500/20 hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all"
            >
              {/* Header block */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <span className="inline-flex items-center text-[10px] font-mono tracking-widest font-bold bg-blue-600/10 text-blue-400 px-2 py-0.5 rounded-none mb-1.5 uppercase">
                    AI / ML INTERN (REMOTE)
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    Mexilet Technologies Pvt. Ltd.
                  </h3>
                </div>
                <div className="flex items-center text-neutral-400 font-mono text-xs bg-neutral-950 px-3 py-1 rounded-none border border-neutral-800 shrink-0 uppercase tracking-widest">
                  <Calendar className="h-3.5 w-3.5 mr-1.5 text-blue-500" />
                  Nov 2025 – Jan 2026
                </div>
              </div>

              {/* Achievements point list */}
              <div className="space-y-3 mt-4 text-neutral-300 text-sm leading-relaxed text-left" id="experience-points-mexilet">
                {resumeData.experience[0].points.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-blue-500 font-bold font-mono mr-2.5 mt-0.5 select-none">&bull;</span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>

              {/* Quick showcase summary tag pills */}
              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-neutral-850 border-neutral-900">
                {["OCR Pipelines", "AWS Bedrock", "AWS Polly", "Speech Synthesis", "LLM Structured Parsing"].map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-neutral-950 text-neutral-400 border border-neutral-800/60 rounded-none">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Item 2: CDGI Academic Path */}
          <div className="relative pl-8 sm:pl-10" id="timeline-item-education">
            {/* Academic badge dot */}
            <span className="absolute -left-[12px] top-1.5 flex h-6 w-6 items-center justify-center rounded-none bg-neutral-900 border border-blue-500/60 shadow-[0_0_10px_rgba(37,99,235,0.2)]">
              <GraduationCap className="h-3.5 w-3.5 text-blue-400" />
            </span>

            {/* Content card */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0F0F0F] border border-neutral-800 rounded-none p-6 hover:border-blue-500/20 hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all"
            >
              {/* Header block */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <span className="inline-flex items-center text-[10px] font-mono tracking-widest font-bold bg-blue-600/10 text-blue-400 px-2 py-0.5 rounded-none mb-1.5 uppercase">
                    UNDERGRADUATE STUDIES (B.TECH)
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    Chameli Devi Group of Institutions (CDGI)
                  </h3>
                  <p className="text-neutral-455 text-neutral-400 text-xs font-mono mt-0.5">
                    Indore, Madhya Pradesh
                  </p>
                </div>
                <div className="flex items-center text-neutral-400 font-mono text-xs bg-neutral-950 px-3 py-1 rounded-none border border-neutral-800 shrink-0 uppercase tracking-widest">
                  <Calendar className="h-3.5 w-3.5 mr-1.5 text-blue-400" />
                  Sept 2023 – Present
                </div>
              </div>

              {/* Path descriptions */}
              <div className="space-y-4 text-neutral-300 text-sm leading-relaxed text-left" id="education-details-cdgi">
                <div className="p-3.5 rounded-none bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-start space-x-3">
                    <Compass className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white text-sm">Degree Program:</span>
                      <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
                        B.Tech in Computer Science & Information Technology, RGPV University
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-right shrink-0 pl-8 sm:pl-0">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">Academic CGPA</span>
                    <span className="text-sm font-mono font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-none inline-block">7.56</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-blue-500 font-bold font-mono mr-2.5 mt-0.5 select-none">&bull;</span>
                  <p>Engaged in rigorous curriculum covering relational database structures, core algorithms, Python ecosystems, and statistical modeling.</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 font-bold font-mono mr-2.5 mt-0.5 select-none">&bull;</span>
                  <p>Active contributor to local developer circles, hackathons, and Google Developer Groups (GDGOC) workshops.</p>
                </div>
              </div>

              {/* Course tech tags */}
              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-neutral-850 border-neutral-900">
                {["Data Structures", "Algorithms", "Operating Systems", "Python", "SQL", "JavaScript", "TypeScript", "React", "Node.js"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-neutral-950 text-neutral-400 border border-neutral-800/60 rounded-none">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
