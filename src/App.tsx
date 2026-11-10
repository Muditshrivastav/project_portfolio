import React, { useState, useEffect } from "react";
import SleekNavbar from "./components/SleekNavbar";
import InteractiveHero from "./components/InteractiveHero";
import SkillsGrid from "./components/SkillsGrid";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsShowcase from "./components/ProjectsShowcase";
import CertBadgeList from "./components/CertBadgeList";
import ContactForm from "./components/ContactForm";
import AiChatBubble from "./components/AiChatBubble";
import { Cpu, Terminal, Compass, Sparkles } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Intersection Observer to highlight navbar links on scroll pass active markers
  useEffect(() => {
    const sections = ["hero", "skills", "experience", "projects", "certifications", "contact"];
    const observers = sections.map((sec) => {
      const el = document.getElementById(sec);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sec);
          }
        },
        { threshold: 0.25, rootMargin: "-80px 0px -20% 0px" }
      );

      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-slate-100 font-sans selection:bg-blue-600/30 selection:text-blue-200 relative">
      
      {/* Universal decorative background grids */}
      <div className="fixed top-0 left-0 right-0 h-[400px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-950/15 via-transparent to-transparent pointer-events-none -z-20" />
      
      {/* 1. Navbar */}
      <SleekNavbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* 2. Main Sections */}
      <main className="relative" id="portfolio-main-content">
        
        {/* About/Hero Segment */}
        <InteractiveHero onOpenChat={() => setIsChatOpen(true)} />

        {/* Skills Segment */}
        <SkillsGrid />

        {/* Experience Segment */}
        <ExperienceTimeline />

        {/* Interactive Projects segment */}
        <ProjectsShowcase />

        {/* Credentials / Hackathons Segment */}
        <CertBadgeList />

        {/* Connect Form segment */}
        <ContactForm />

      </main>

      {/* 3. Floating Representative AI Copilot */}
      <AiChatBubble
        isOpen={isChatOpen}
        onOpen={() => setIsChatOpen(true)}
        onClose={() => setIsChatOpen(false)}
      />

    </div>
  );
}
