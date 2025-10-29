"use client";

import React from "react";
import SkillsGridHome from "@/components/home/SkillsGridHome";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const about = { path: "/about" };
const work = { path: "/work" };

export default function Home() {
  const services = [
    {
      title: "iOS Development",
      description: "Native apps in Swift focused on performance and user experience.",
      icon: "📱",
      color: "blue",
    },
    {
      title: "Android Development",
      description: "Modern Android apps with Kotlin and the latest platform features.",
      icon: "🤖",
      color: "green",
    },
    {
      title: "UI/UX Design",
      description: "Attractive and intuitive interfaces following design guidelines.",
      icon: "🎨",
      color: "purple",
    },
  ];

  return (
    <main style={{ display: "flex", justifyContent: "center", padding: "64px 0" }}>
      <div style={{ width: "100%", maxWidth: 1200, padding: "0 24px" }}>
        {/* HERO */}
        <section style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12, marginBottom: 32 }}>
          <div style={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", marginBottom: 16, border: "4px solid #9b5de5" }}>
            <img src="/images/avatar.jpg" alt="Ana Ganfornina" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          <h1 style={{ fontSize: "2.5rem", fontWeight: 700 }}>Ana Ganfornina</h1>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#9b5de5", marginTop: "-12px" }}>Mobile Developer</h2>
          <p style={{ color: "#737373", fontSize: "1.125rem", maxWidth: 760 }}>
            Specialized in creating unique mobile experiences with Swift and Kotlin.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", width: "100%", marginTop: 16 }}>
            <a href={about.path} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 18px", borderRadius: 10, background: "transparent", border: "1px solid rgba(0,0,0,0.06)", textDecoration: "none", color: "inherit", fontWeight: 600, minWidth: 140 }}>
              About Me
            </a>
            <a href={work.path} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 18px", borderRadius: 10, background: "#9b5de5", color: "#fff", textDecoration: "none", fontWeight: 600, minWidth: 140 }}>
              View Projects → 
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section>
          <SkillsGridHome skills={services} />
        </section>

        {/* CONTACT */}
        <section style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12, marginTop: 32 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>Get in Touch</h2>
          <p style={{ color: "#737373", maxWidth: 760 }}>Let's talk about your project or idea. I'd love to collaborate with you!</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 12 }}>
            <a href="https://www.linkedin.com/in/ana-ganfornina" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 10, background: "transparent", border: "1px solid rgba(0,0,0,0.06)", textDecoration: "none", color: "inherit", fontWeight: 600 }}>
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/ana-ganfornina" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 10, background: "transparent", border: "1px solid rgba(0,0,0,0.06)", textDecoration: "none", color: "inherit", fontWeight: 600 }}>
              <FaGithub size={18} /> GitHub
            </a>
            <a href="mailto:ana.ganfornina@example.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 10, background: "transparent", border: "1px solid rgba(0,0,0,0.06)", textDecoration: "none", color: "inherit", fontWeight: 600 }}>
              <MdEmail size={18} /> Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
