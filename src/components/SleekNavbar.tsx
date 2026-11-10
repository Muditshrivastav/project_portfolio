import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Menu, X, Github, Linkedin, Mail, FileText, Instagram } from "lucide-react";
import { resumeData } from "../data/resume";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function SleekNavbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <motion.header
      id="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center space-x-2 group focus:outline-none cursor-pointer"
          id="btn-nav-logo"
        >
          <div className="p-1.5 rounded-none bg-blue-600/10 border border-blue-500/20 group-hover:border-blue-400 group-hover:bg-blue-600/20 transition-all duration-300">
            <Terminal className="h-5 w-5 text-blue-400 group-hover:rotate-6 transition-transform" />
          </div>
          <span className="font-mono font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
            mudit<span className="text-blue-500">.sh</span>
          </span>
        </button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center space-x-1" id="nav-desktop-menu">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-mono text-xs uppercase tracking-wider leading-5 cursor-pointer transition-colors duration-300 ${
                  isActive ? "text-blue-400 font-semibold" : "text-neutral-400 hover:text-white"
                }`}
                id={`btn-nav-item-${item.id}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-bubble"
                    className="absolute inset-0 bg-blue-600/10 border border-blue-500/20 rounded-none -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Social interactions and contact */}
        <div className="hidden lg:flex items-center space-x-3" id="nav-desktop-socials">
          <a
            href={resumeData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-none transition-all"
            title="GitHub"
            id="link-nav-github"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={resumeData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-none transition-all"
            title="LinkedIn"
            id="link-nav-linkedin"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={resumeData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-none transition-all"
            title="Instagram"
            id="link-nav-instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={resumeData.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Mudit_Shrivastav_Resume.pdf"
            className="flex items-center space-x-1.5 font-mono text-xs uppercase tracking-wider px-3 py-2 rounded-none border border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-white hover:border-blue-500/30 transition-all"
            title="Download Resume PDF"
            id="link-nav-resume"
          >
            <FileText className="h-4 w-4 text-blue-400" />
            <span>Resume</span>
          </a>
          <a
            href={`mailto:${resumeData.email}`}
            className="flex items-center space-x-2 font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-none border border-blue-500/30 bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300"
            id="link-nav-hire"
          >
            <Mail className="h-4 w-4" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden" id="nav-mobile-trigger">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-400 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
            id="btn-nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0A] border-b border-neutral-800"
            id="nav-mobile-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-none font-mono text-xs uppercase tracking-wider cursor-pointer block transition-all ${
                    activeSection === item.id
                      ? "bg-blue-600/15 text-blue-400 border-l-2 border-blue-500 pl-3"
                      : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                  }`}
                  id={`btn-nav-mobile-item-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-neutral-950 my-4" />
              <div className="flex items-center justify-around px-4">
                <a
                  href={resumeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-neutral-400 hover:text-white py-2"
                  id="link-nav-mobile-github"
                >
                  <Github className="h-4.5 w-4.5" />
                  <span className="font-mono text-xs">GitHub</span>
                </a>
                <a
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-neutral-400 hover:text-white py-2"
                  id="link-nav-mobile-linkedin"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                  <span className="font-mono text-xs">LinkedIn</span>
                </a>
                <a
                  href={resumeData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-neutral-400 hover:text-white py-2"
                  id="link-nav-mobile-instagram"
                >
                  <Instagram className="h-4.5 w-4.5" />
                  <span className="font-mono text-xs">Insta</span>
                </a>
                <a
                  href={resumeData.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mudit_Shrivastav_Resume.pdf"
                  className="flex items-center space-x-1.5 text-blue-400 hover:text-blue-300 py-2"
                  id="link-nav-mobile-resume"
                >
                  <FileText className="h-4.5 w-4.5" />
                  <span className="font-mono text-xs">Resume</span>
                </a>
                <a
                  href={`mailto:${resumeData.email}`}
                  className="flex items-center space-x-1.5 text-neutral-400 hover:text-white py-2"
                  id="link-nav-mobile-email"
                >
                  <Mail className="h-4.5 w-4.5" />
                  <span className="font-mono text-xs">Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
