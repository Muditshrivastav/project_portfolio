import React, { useState } from "react";
import { motion } from "motion/react";
import { Terminal, Cpu, MessageSquare, ArrowDownRight, Coffee, Sparkles, FolderCode, FileText, Github, Linkedin, Instagram } from "lucide-react";
import { resumeData } from "../data/resume";

interface HeroProps {
  onOpenChat: () => void;
}

type TabType = "mudit.py" | "mission.md" | "stack.json";

export default function InteractiveHero({ onOpenChat }: HeroProps) {
  const [activeTab, setActiveTab] = useState<TabType>("mudit.py");

  const codeContents: Record<TabType, string> = {
    "mudit.py": `class AI_ML_Engineer:
    def __init__(self):
        self.name = "Mudit Shrivastav"
        self.academic_path = "B.Tech in CS & IT @ CDGI (CGPA: 7.56)"
        self.current_focus = "Autonomous Coding Agents & MCP Routing"
        self.internship = "AI/ML Intern @ Mexilet Technologies"

    def get_core_strengths(self):
        return [
            "Agent Orchestration (LangChain, LangGraph, MCP)",
            "Self-Healing Code Loops (DevTools, Docker)",
            "GraphRAG & Graph Expansion (Neo4j, KuzuDB)",
            "Hybrid RAG & Catalog Parsing (LlamaParse, LangSmith)",
            "Full-Stack Integration (FastAPI, React, TypeScript)"
        ]

    def status(self):
        return "Building production autonomous agent systems."`,

    "mission.md": `# The Vision

To design self-grounded autonomous AI agents and low-latency GraphRAG retrieval pipelines that minimize token overhead and execute complex workflows securely.

## Tech Pillars
- **MCP Routing**: Reduced tool-schema token consumption by 98% via ChromaDB & KuzuDB.
- **Autonomous Agents**: LangGraph + Docker sandboxes with self-healing DevTools feedback loops.
- **Hybrid RAG & Graph**: Neo4j GraphRAG and hybrid search with RAGAS grounding checks.`,

    "stack.json": `{
  "languages": ["Python", "SQL", "TypeScript", "JavaScript", "HTML/CSS"],
  "agent_orchestration": ["LangGraph", "Deep Agents", "MCP", "LangChain"],
  "machine_learning": ["Transformers", "CNN", "RNN", "LSTM", "NLP", "Computer Vision", "OCR"],
  "databases_and_graph": ["Neo4j (GraphDB)", "KuzuDB", "ChromaDB", "Supabase", "MongoDB", "MySQL"],
  "tools_and_platforms": ["Docker", "Claude AI", "Codex AI Agent", "Antigravity", "Hugging Face"],
  "frameworks_and_eval": ["FastAPI", "TensorFlow", "PyTorch", "LlamaParse", "LangSmith", "Playwright"]
}`
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Visual Ambient Background Lines - Artistic Flair Dark Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-[#0A0A0A] to-[#0A0A0A] -z-10" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(to_left,rgba(37,99,235,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] -z-10 hidden md:block" />

      {/* Modernist blue spotlight dust vectors */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Statement Container (Left) */}
          <div className="lg:col-span-7 space-y-8 text-left" id="hero-statement-container">
            
            {/* Custom Modern Status Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-3 bg-blue-600 text-white px-4 py-2 font-mono font-bold tracking-tighter uppercase text-xs rounded-none shadow-[2px_2px_0px_0px_rgba(255,255,255,0.25)]"
            >
              <Cpu className="h-3.5 w-3.5 animate-spin [animation-duration:10s]" />
              <span>Available for 2026 AI Projects</span>
            </motion.div>

            {/* Display Typography */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-mono text-blue-500 font-bold uppercase tracking-[0.25em] text-xs"
              >
                — BIOGRAPHY / AI & ML ARCHITECT
              </motion.p>
              
              <div className="relative">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.85] text-white uppercase font-sans"
                >
                  Mudit<br/>
                  Shrivastav<span className="text-blue-600">.</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg sm:text-xl font-light text-neutral-400 tracking-widest uppercase italic leading-normal pt-2"
              >
                Building Autonomous Coding Agents, MCP Routers & Graph RAGs
              </motion.p>
            </div>

            {/* Engaging brief introduction */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed font-sans"
            >
              Bridging the gap between conceptual AI architectures and production-grade engineering. Specializing in autonomous multi-agent systems (LangGraph), multi-stage retrieval pipelines (ChromaDB / KuzuDB / Neo4j), and MCP tool routing.
            </motion.p>

            {/* Dynamic visual parameters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 py-4 font-mono text-left max-w-xl border-y border-neutral-850 border-neutral-900"
            >
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tighter">98%</div>
                <div className="text-[9px] text-neutral-400 uppercase tracking-widest leading-snug">Tool Schema Saved</div>
              </div>
              <div className="space-y-1 border-x border-neutral-900 px-4 sm:px-6">
                <div className="text-2xl sm:text-3xl font-bold text-blue-500 flex items-center space-x-1 tracking-tighter">
                  <span>03</span>
                  <Sparkles className="h-4.5 w-4.5 text-blue-400 shrink-0" />
                </div>
                <div className="text-[9px] text-neutral-400 uppercase tracking-widest leading-snug">Autonomous Systems</div>
              </div>
              <div className="space-y-1 pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tighter">7.56</div>
                <div className="text-[9px] text-neutral-400 uppercase tracking-widest leading-snug">B.Tech CGPA @ CDGI</div>
              </div>
            </motion.div>

            {/* Core Action Call buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2"
              id="hero-actions-container"
            >
              <button
                onClick={onOpenChat}
                className="flex items-center justify-center space-x-2 font-mono text-xs uppercase tracking-wider font-bold px-5 py-4 rounded-none bg-blue-600 text-white shadow-none hover:bg-blue-500 active:scale-[0.98] transition-all cursor-pointer"
                id="btn-hero-chat-ai"
              >
                <MessageSquare className="h-4 w-4 shrink-0 text-blue-200" />
                <span>Representative AI</span>
              </button>
              <button
                onClick={handleScrollToProjects}
                className="flex items-center justify-center space-x-2 font-mono text-xs uppercase tracking-wider px-5 py-4 rounded-none border border-neutral-800 bg-[#0F0F0F] text-neutral-200 hover:bg-neutral-900 hover:text-white hover:border-neutral-700 transition-all cursor-pointer"
                id="btn-hero-view-projects"
              >
                <FolderCode className="h-4 w-4 text-blue-400 shrink-0" />
                <span>Selected Works</span>
                <ArrowDownRight className="h-4 w-4 text-neutral-500 shrink-0" />
              </button>
              <a
                href={resumeData.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Mudit_Shrivastav_Resume.pdf"
                className="flex items-center justify-center space-x-2 font-mono text-xs uppercase tracking-wider px-5 py-4 rounded-none border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-white transition-all cursor-pointer"
                id="btn-hero-download-resume"
              >
                <FileText className="h-4 w-4 text-blue-400 shrink-0" />
                <span>Resume (PDF)</span>
              </a>
            </motion.div>

            {/* Quick social links row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center space-x-3 pt-1 text-xs font-mono text-neutral-400"
              id="hero-social-links-bar"
            >
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">Socials:</span>
              <a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-white transition-colors group"
                id="hero-link-github"
              >
                <Github className="h-3.5 w-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <span className="text-neutral-700">/</span>
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-white transition-colors group"
                id="hero-link-linkedin"
              >
                <Linkedin className="h-3.5 w-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <span className="text-neutral-700">/</span>
              <a
                href={resumeData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-white transition-colors group"
                id="hero-link-instagram"
              >
                <Instagram className="h-3.5 w-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
            </motion.div>
          </div>

          {/* Interactive tabbed code window on the right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 h-[400px] sm:h-[450px] flex flex-col bg-[#0F0F0F] rounded-none border border-neutral-800 shadow-[0_15px_30px_rgba(0,0,0,0.8)] overflow-hidden"
            id="hero-terminal-container"
          >
            {/* Terminal Chrome Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0A0A0A] border-b border-neutral-900">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-none bg-neutral-800" />
                <div className="w-2.5 h-2.5 rounded-none bg-neutral-700" />
                <div className="w-2.5 h-2.5 rounded-none bg-blue-600" />
                <span className="text-[10px] font-mono text-neutral-500 ml-4 font-semibold uppercase tracking-wider flex items-center">
                  <Terminal className="h-3.5 w-3.5 mr-1 text-neutral-500" />
                  Terminal // active_stack
                </span>
              </div>
              <div className="flex items-center font-mono text-[9px] text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded-none border border-neutral-800">
                STABLE_BUILD
              </div>
            </div>

            {/* Code editor tabs */}
            <div className="flex bg-[#0A0A0A] border-b border-neutral-900 px-2">
              {(["mudit.py", "mission.md", "stack.json"] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#0F0F0F] border-t-2 border-blue-500 text-white font-medium"
                      : "bg-transparent border-t-2 border-transparent text-neutral-500 hover:text-neutral-300"
                  }`}
                  id={`btn-terminal-tab-${tab.replace(".", "-")}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Terminal Output */}
            <div className="flex-1 p-5 overflow-auto font-mono text-xs leading-relaxed text-neutral-300 bg-[#0F0F0F] scrollbar-thin">
              <pre className="whitespace-pre-wrap select-all selection:bg-blue-500/25">
                {codeContents[activeTab]}
              </pre>
            </div>

            {/* Status Footer bar */}
            <div className="px-4 py-2 bg-[#0A0A0A] border-t border-neutral-900 flex items-center justify-between font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
              <div className="flex items-center space-x-2 text-neutral-400">
                <Coffee className="h-3.5 w-3.5 text-blue-500" />
                <span>UTF-8 // python3</span>
              </div>
              <div>Buffer 100%</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
