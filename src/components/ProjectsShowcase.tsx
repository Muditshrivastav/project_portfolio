import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, Github, Cpu, Network, Zap, CheckCircle2, Play, RefreshCw, Layers } from "lucide-react";
import { resumeData, Project } from "../data/resume";

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const [activeFlowStep, setActiveFlowStep] = useState<number>(-1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const runFlowSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveFlowStep(0);

    const project = resumeData.projects[selectedProject];
    const stepsLength = project.interactiveFlow?.nodes.length || 0;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < stepsLength) {
        setActiveFlowStep(current);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setActiveFlowStep(-1);
      }
    }, 1800);
  };

  const projectColors = [
    { text: "text-blue-400", bg: "bg-blue-500/10", border: "hover:border-blue-500/20" },
    { text: "text-blue-400", bg: "bg-blue-600/10", border: "hover:border-blue-600/20" },
    { text: "text-indigo-400", bg: "bg-indigo-500/10", border: "hover:border-indigo-505/20" },
  ];

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-none bg-blue-600/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider italic">
              <FolderGit2 className="h-3.5 w-3.5 text-blue-400" />
              <span>— PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">
              Featured Engineering Projects
            </h2>
            <p className="text-neutral-400 max-w-xl text-sm italic font-light">
              Engineered and documented open-source architectures focused on RAG indexing mechanisms, deep tool orchestrations, and context retrieval routing pipelines.
            </p>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs text-neutral-500">
            <Zap className="h-4 w-4 text-blue-500 animate-pulse" />
            <span>Click any project to inspect its architecture</span>
          </div>
        </div>

        {/* Layout split: left are tabs/summaries, right is the sandbox diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project selections & points (7 cols) */}
          <div className="lg:col-span-6 space-y-4" id="project-list-left">
            {resumeData.projects.map((project, idx) => {
              const isSelected = selectedProject === idx;
              const theme = projectColors[idx % projectColors.length];

              return (
                <div
                  key={project.title}
                  onClick={() => {
                    setSelectedProject(idx);
                    setActiveFlowStep(-1);
                    setIsSimulating(false);
                  }}
                  className={`cursor-pointer rounded-none border text-left p-6 transition-all duration-300 ${
                    isSelected
                      ? "bg-neutral-900 border-blue-550 border-blue-500 shadow-[0_4px_30px_rgba(37,99,235,0.06)]"
                      : "bg-[#0F0F0F]/60 border-neutral-850 border-neutral-800/80 hover:bg-neutral-900 hover:border-neutral-700"
                  }`}
                  id={`project-card-row-${idx}`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center space-x-2.5">
                        <span className={`px-2 py-0.5 rounded-none border font-mono text-[9px] uppercase tracking-widest ${theme.bg} ${theme.text}`}>
                          PROJ - 0{idx + 1}
                        </span>
                        <h3 className="text-lg font-bold text-white leading-tight">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-xs text-neutral-400 font-mono">
                        {project.subtitle}
                      </p>
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Overwrite redirect trigger
                      className="p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-none transition-colors border border-transparent hover:border-neutral-800"
                      title="View Sources"
                      id={`project-github-btn-${idx}`}
                    >
                      <Github className="h-4.5 w-4.5" />
                    </a>
                  </div>

                  {/* Highlights expandable bullet content */}
                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4 pt-4 border-t border-neutral-850 border-neutral-800 space-y-3 text-neutral-300 text-xs sm:text-sm leading-relaxed"
                      >
                        {project.points.map((pt, pIdx) => (
                           <div key={pIdx} className="flex items-start">
                             <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mr-2.5 mt-0.5" />
                             <p>{pt}</p>
                           </div>
                        ))}

                        {/* Showcase tags */}
                        <div className="flex flex-wrap gap-2 pt-3">
                          {project.tech.map((tech) => (
                            <span key={tech} className="text-[10px] sm:text-xs font-mono font-medium px-2 py-0.5 rounded-none bg-neutral-950 border border-neutral-800 text-neutral-400">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic architecture sandbox flow diagram (5 cols) */}
          <div className="lg:col-span-6 bg-[#0F0F0F] rounded-none border border-neutral-800 p-6 flex flex-col h-full min-h-[460px]" id="project-flow-sandbox">
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-1.5 text-left">
                <span className="text-[9px] font-mono tracking-widest text-blue-400 font-bold border border-blue-500/10 px-2 py-0.5 rounded-none bg-blue-500/5">
                  SANDBOX FLOW VISUALIZER
                </span>
                <h4 className="text-md font-bold text-white tracking-widest uppercase font-mono">
                  {resumeData.projects[selectedProject].title} Data Flow
                </h4>
              </div>

              {/* Run button */}
              <button
                onClick={runFlowSimulation}
                disabled={isSimulating}
                className={`flex items-center space-x-1.5 font-mono text-[10px] uppercase tracking-wider px-3.5 py-2.5 rounded-none border transition-all cursor-pointer ${
                  isSimulating
                    ? "bg-neutral-950 border-neutral-800 text-neutral-600 animate-pulse"
                    : "bg-blue-600 border-blue-600 text-white hover:bg-blue-500 font-bold"
                }`}
                id="btn-run-simulation"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                    <span>Processing</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-white" />
                    <span>Incept Pipeline</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-neutral-400 font-mono mb-6 leading-relaxed bg-neutral-950 p-3 rounded-none border border-neutral-850 text-left">
              Click "Incept Pipeline" above to trigger a mock request simulator showing Mudit's custom data integration, query steps, and response sequences.
            </p>

            {/* Simulated Nodes timeline graph */}
            <div className="flex-1 flex flex-col justify-center space-y-4">
              {resumeData.projects[selectedProject].interactiveFlow?.nodes.map((node, nIdx) => {
                const isActive = activeFlowStep === nIdx;
                const isCompleted = activeFlowStep > nIdx;
                const edge = resumeData.projects[selectedProject].interactiveFlow?.edges[nIdx];

                return (
                  <div key={node} className="relative flex flex-col items-center">
                    {/* Node block */}
                    <div
                      className={`w-full max-w-sm px-4 py-3 rounded-none border text-center transition-all duration-300 font-mono text-xs ${
                        isActive
                          ? "bg-blue-500/20 border-blue-400 text-blue-300 shadow-[0_0_15px_rgba(37,99,235,0.3)] scale-[1.03]"
                          : isCompleted
                          ? "bg-blue-500/5 border-blue-500/25 text-blue-400"
                          : "bg-neutral-950 border-neutral-850 border-neutral-800/85 text-neutral-500"
                      }`}
                      id={`node-${selectedProject}-${nIdx}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-neutral-500">Step 0{nIdx + 1}</span>
                        <span className="font-semibold text-[11px] sm:text-xs text-ellipsis overflow-hidden">{node}</span>
                        <div className="flex items-center space-x-1">
                          {isActive && <div className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />}
                          <div
                            className={`h-2.5 w-2.5 rounded-none border ${
                              isActive
                                ? "bg-blue-450 bg-blue-400 border-blue-400"
                                : isCompleted
                                ? "bg-blue-500 border-blue-500"
                                : "bg-neutral-800 border-neutral-700"
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Edge Connector line */}
                    {nIdx < (resumeData.projects[selectedProject].interactiveFlow?.nodes.length || 0) - 1 && (
                      <div className="h-6 w-[2px] bg-neutral-800 relative select-none">
                        {/* Moving packet dot */}
                        {isActive && (
                          <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: 24 }}
                            transition={{ duration: 1.8, ease: "linear" }}
                            className="absolute -left-[3px] h-2 w-2 bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.8)]"
                          />
                        )}
                        {/* Edge contextual label tooltip */}
                        {edge && (
                          <div className="absolute left-4 top-0 whitespace-nowrap text-[9px] font-mono text-neutral-500 py-0.5 px-1 bg-neutral-950 rounded border border-neutral-900/60 shrink-0">
                            {edge.label}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
