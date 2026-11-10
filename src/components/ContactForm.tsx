import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, SendHorizontal, FileText, Github, Linkedin, Instagram } from "lucide-react";
import { resumeData } from "../data/resume";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    // Simulate server ingestion workflow
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] border-t border-neutral-900 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-left max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-none bg-blue-600/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider italic">
            <Mail className="h-3.5 w-3.5 text-blue-400" />
            <span>— CONNECT WITH ME</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">
            Initiate Contact
          </h2>
          <p className="text-neutral-400 text-sm italic font-light">
            Reach out directly for freelance contracts, co-ops, collaborative hackathons, or general queries.
          </p>
        </div>

        {/* Form and physical details split column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch" id="contact-split-container">
          
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left" id="contact-details-col">
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-white tracking-widest uppercase font-mono border-b border-neutral-850 pb-3">
                Direct Channels
              </h3>
              <p className="text-neutral-405 text-neutral-400 text-sm leading-relaxed max-w-sm italic">
                Feel free to skip forms and ring my secure line or ping an email directly. I respond promptly within 24 hours.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4" id="direct-contact-cards">
              
              {/* Card E-Mail */}
              <a
                href={`mailto:${resumeData.email}`}
                className="group block bg-[#0F0F0F] border border-neutral-800 p-4 rounded-none hover:border-blue-500/20 hover:shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all"
                id="link-direct-email"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-none bg-blue-500/5 text-blue-400 border border-blue-500/10 group-hover:bg-blue-500/15 group-hover:border-blue-400/20 transition-all shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">Send Email</span>
                    <span className="font-bold text-neutral-200 group-hover:text-blue-400 transition-colors text-sm sm:text-base break-all font-mono">
                      {resumeData.email}
                    </span>
                  </div>
                </div>
              </a>

              {/* Card Phone */}
              <a
                href={`tel:${resumeData.phone.replace(/[^0-9+]/g, "")}`}
                className="group block bg-[#0F0F0F] border border-neutral-800 p-4 rounded-none hover:border-blue-500/20 hover:shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all"
                id="link-direct-phone"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-none bg-blue-500/5 text-blue-400 border border-blue-500/10 group-hover:bg-blue-500/15 group-hover:border-blue-400/20 transition-all shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-mono">Call Direct</span>
                    <span className="font-bold text-neutral-200 group-hover:text-blue-400 transition-colors text-sm sm:text-base font-mono">
                      {resumeData.phone}
                    </span>
                  </div>
                </div>
              </a>

              {/* Card Resume PDF */}
              <a
                href={resumeData.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Mudit_Shrivastav_Resume.pdf"
                className="group block bg-[#0F0F0F] border border-neutral-800 p-4 rounded-none hover:border-blue-500/20 hover:shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all"
                id="link-direct-resume"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-none bg-blue-500/5 text-blue-400 border border-blue-500/10 group-hover:bg-blue-500/15 group-hover:border-blue-400/20 transition-all shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-mono">Curriculum Vitae</span>
                    <span className="font-bold text-neutral-200 group-hover:text-blue-400 transition-colors text-sm sm:text-base font-mono">
                      Download Resume PDF
                    </span>
                  </div>
                </div>
              </a>

              {/* Card Location */}
              <div className="bg-[#0F0F0F]/50 border border-neutral-800/40 p-4 rounded-none flex items-center space-x-4">
                <div className="p-3 rounded-none bg-neutral-950 text-neutral-500 border border-neutral-800 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-mono">Location</span>
                  <span className="font-bold text-neutral-300 text-sm sm:text-base">
                    Indore, Madhya Pradesh, India
                  </span>
                </div>
              </div>

              {/* Social Networks Quick Access */}
              <div className="pt-2">
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-2 font-bold">
                  Connect On Socials
                </span>
                <div className="grid grid-cols-3 gap-2" id="contact-social-links-grid">
                  <a
                    href={resumeData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 bg-[#0F0F0F] border border-neutral-800 hover:border-blue-500/40 hover:bg-blue-600/5 text-neutral-300 hover:text-white transition-all group rounded-none"
                    id="link-contact-github"
                  >
                    <Github className="h-4.5 w-4.5 mb-1.5 text-neutral-400 group-hover:text-blue-400 group-hover:scale-110 transition-all" />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">GitHub</span>
                  </a>
                  <a
                    href={resumeData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 bg-[#0F0F0F] border border-neutral-800 hover:border-blue-500/40 hover:bg-blue-600/5 text-neutral-300 hover:text-white transition-all group rounded-none"
                    id="link-contact-linkedin"
                  >
                    <Linkedin className="h-4.5 w-4.5 mb-1.5 text-neutral-400 group-hover:text-blue-400 group-hover:scale-110 transition-all" />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">LinkedIn</span>
                  </a>
                  <a
                    href={resumeData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 bg-[#0F0F0F] border border-neutral-800 hover:border-blue-500/40 hover:bg-blue-600/5 text-neutral-300 hover:text-white transition-all group rounded-none"
                    id="link-contact-instagram"
                  >
                    <Instagram className="h-4.5 w-4.5 mb-1.5 text-neutral-400 group-hover:text-blue-400 group-hover:scale-110 transition-all" />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Instagram</span>
                  </a>
                </div>
              </div>

            </div>

            <div className="text-[10px] font-mono text-neutral-600 hidden lg:block leading-relaxed">
              &copy; 2026 Mudit Shrivastav // Crafted in Cloud Native Workspace.
            </div>
          </div>

          {/* Contact form inputs (7 cols) */}
          <div className="lg:col-span-7 bg-[#0F0F0F] border border-neutral-800 rounded-none p-6 sm:p-8 flex flex-col justify-center" id="contact-form-col">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-4 text-left"
                  id="form-contact-inputs"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-widest text-neutral-450 text-neutral-400 uppercase">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 rounded-none text-xs font-mono text-neutral-200 focus:outline-none focus:border-blue-500"
                        id="input-contact-name"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-widest text-neutral-450 text-neutral-400 uppercase">E-Mail Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 rounded-none text-xs font-mono text-neutral-200 focus:outline-none focus:border-blue-500"
                        id="input-contact-email"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-widest text-neutral-450 text-neutral-400 uppercase">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Opportunity / Collaboration"
                      className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 rounded-none text-xs font-mono text-neutral-200 focus:outline-none focus:border-blue-500"
                      id="input-contact-subject"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-widest text-neutral-450 text-neutral-400 uppercase">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message in here..."
                      className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 rounded-none text-xs font-mono text-neutral-200 focus:outline-none focus:border-blue-500 resize-none"
                      id="input-contact-message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 font-mono text-xs uppercase tracking-widest py-3.5 px-5 rounded-none border border-blue-500 bg-blue-600 text-white font-bold hover:bg-blue-500 disabled:opacity-50 transition-all cursor-pointer shadow-none"
                    id="btn-contact-submit"
                  >
                    <span>{isSubmitting ? "Routing Message..." : "Dispatch Message"}</span>
                    <SendHorizontal className="h-4 w-4 shrink-0" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="text-center py-8 space-y-4"
                  id="contact-form-success-alert"
                >
                  <div className="inline-flex p-3 rounded-none bg-blue-500/10 border border-blue-500/20 text-blue-400 animate-bounce">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider font-mono">
                    Signal Received successfully!
                  </h3>
                  <p className="text-neutral-400 text-xs font-mono max-w-xs mx-auto leading-relaxed">
                    Thank you! Your message data has been packaged. I will check my server-mailbox and correspond with you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="font-mono text-xs text-blue-400 hover:text-blue-300 underline cursor-pointer"
                    id="btn-contact-send-another"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
