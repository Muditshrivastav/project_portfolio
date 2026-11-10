import React, { useState } from "react";
import { motion } from "motion/react";
import { Search, Code2, BrainCircuit, Library, Hammer, Database, Layers } from "lucide-react";
import { resumeData } from "../data/resume";

export default function SkillsGrid() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Languages",
      icon: Code2,
      skills: resumeData.technicalSkills.languages,
      gradient: "from-blue-500/10 to-indigo-500/10",
      accentColor: "text-blue-400 border-blue-500/20",
    },
    {
      title: "Machine Learning & Deep Learning",
      icon: BrainCircuit,
      skills: resumeData.technicalSkills.machineLearningAndDL,
      gradient: "from-blue-600/10 to-slate-500/10",
      accentColor: "text-blue-400 border-blue-500/20",
    },
    {
      title: "Frameworks & Libraries",
      icon: Library,
      skills: resumeData.technicalSkills.frameworksAndLibraries,
      gradient: "from-indigo-600/10 to-blue-500/10",
      accentColor: "text-blue-400 border-blue-500/20",
    },
    {
      title: "Tools & Platforms",
      icon: Hammer,
      skills: resumeData.technicalSkills.toolsAndPlatforms,
      gradient: "from-slate-600/10 to-blue-500/10",
      accentColor: "text-blue-400 border-blue-500/20",
    },
    {
      title: "Cloud & Databases",
      icon: Database,
      skills: resumeData.technicalSkills.cloudAndDatabases,
      gradient: "from-indigo-500/10 to-blue-600/10",
      accentColor: "text-blue-400 border-blue-500/20",
    },
  ];

  // Helper to determine if a skill matches the search query.
  const isMatch = (skill: string) => {
    return skill.toLowerCase().includes(searchQuery.trim().toLowerCase());
  };

  return (
    <section id="skills" className="py-24 bg-[#0A0A0A] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title & description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-none bg-blue-600/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider italic">
              <Layers className="h-3.5 w-3.5 text-blue-400" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">
              Professional Expertise
            </h2>
            <p className="text-neutral-400 max-w-xl text-sm italic font-light">
              — A comprehensive layout of Mudit's technical toolbox, specializing in AI-routing networks, transformers, deep modeling structures, and cloud-native databases.
            </p>
          </div>

          {/* Real-time search filter */}
          <div className="relative max-w-md w-full md:w-80" id="skills-search-container">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-neutral-500" />
            </div>
            <input
              type="text"
              placeholder="Filter capabilities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-none text-xs font-mono text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-all"
              id="input-skills-filter"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-neutral-500 hover:text-neutral-400 cursor-pointer font-mono"
                id="btn-skills-clear"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Dynamic skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="skills-grid-container">
          {categories.map((category, idx) => {
            const hasVisibleSkills = category.skills.some((skill) => isMatch(skill));
            
            // If search is active, hide categories which contain zero matching elements
            if (searchQuery.trim() !== "" && !hasVisibleSkills) return null;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`flex flex-col bg-[#0F0F0F] rounded-none border border-neutral-800 p-6 overflow-hidden transition-all duration-300 hover:border-blue-600/30 hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)]`}
                id={`card-skill-cat-${idx}`}
              >
                {/* Header info */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-2 rounded-none bg-neutral-950 border border-neutral-800 ${category.accentColor.split(" ")[0]}`}>
                    <category.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-widest uppercase font-mono">
                    {category.title}
                  </h3>
                </div>

                {/* Badges layout */}
                <div className="flex flex-wrap gap-2.5 flex-1 content-start">
                  {category.skills.map((skill) => {
                    const isHighlighted = isMatch(skill) && searchQuery.trim() !== "";
                    
                    return (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-none text-[11px] font-mono border transition-all duration-300 ${
                          isHighlighted
                            ? "bg-blue-600 text-white border-blue-500"
                            : "bg-neutral-900/60 text-neutral-300 border-neutral-800/80 hover:border-neutral-700 hover:text-white"
                        }`}
                        id={`badge-skill-item-${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Informational message when search returns nothing */}
        {searchQuery.trim() !== "" &&
          !categories.some((cat) => cat.skills.some((skill) => isMatch(skill))) && (
            <div className="text-center py-12" id="skills-empty-state">
              <p className="text-neutral-500 font-mono text-xs">
                No matching tech skills found for "{searchQuery}".
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-blue-400 hover:text-blue-300 text-xs font-mono underline"
                id="btn-skills-reset-all"
              >
                Reset Search
              </button>
            </div>
          )}
      </div>
    </section>
  );
}
