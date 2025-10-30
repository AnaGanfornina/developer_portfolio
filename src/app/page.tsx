"use client";

import React from "react";
import SkillsGridHome from "@/components/home/SkillsGridHome";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Home.module.scss";

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
    <main className={styles.homeContainer}>
      <div style={{ width: "100%", maxWidth: 1200, padding: "0 24px" }}>
        {/* HERO */}
        <section className={styles.hero}>
          {/* Avatar */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              overflow: "hidden",
              marginBottom: 16,
              border: "4px solid #9b5de5",
              margin: "0 auto 16px",
            }}
          >
            <img
              src="/images/avatar.jpg"
              alt="Ana Ganfornina"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <h1 className={styles.title}>Ana Ganfornina</h1>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#9b5de5",
              marginTop: "-12px",
              marginBottom: "8px",
            }}
          >
            Mobile Developer
          </h2>
          <p className={styles.subtitle}>
            Specialized in creating unique mobile experiences with Swift and Kotlin.
          </p>

          {/* HERO BUTTONS */}
          <div className={styles.buttonsRow}>
            <a href={about.path} className={styles.outlinedButton}>
              About Me
            </a>

            <a href={work.path} className={styles.filledButton}>
              View Projects →
            </a>
          </div>
        </section>

        {/* Separador */}
        <div
          style={{
            height: 1,
            background: "rgba(0,0,0,0.06)",
            margin: "48px 0",
          }}
        />

        {/* SERVICES */}
        <section>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, textAlign: "center", marginBottom: "32px" }}>
            Services
          </h2>
          <SkillsGridHome skills={services} />
        </section>

        {/* Separador */}
        <div
          style={{
            height: 1,
            background: "rgba(0,0,0,0.06)",
            margin: "48px 0",
          }}
        />

        {/* CONTACT */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 12,
          }}
        >
          <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>Get in Touch</h2>
          <p style={{ color: "#737373", maxWidth: 760, marginBottom: "20px" }}>
            Let's talk about your project or idea. I'd love to collaborate with you!
          </p>

          <div className={styles.socialButtons}>
            <a
              href="https://www.linkedin.com/in/ana-ganfornina-arques/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>

            <a
              href="https://github.com/AnaGanfornina"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <FaGithub size={18} /> GitHub
            </a>

            <a href="mailto:aganforques@gmail.com" className={styles.socialButton}>
              <MdEmail size={18} /> Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}