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
    <main style={{ display: "flex", justifyContent: "center", padding: "64px 0" }}>
      <div style={{ width: "100%", maxWidth: 1200, padding: "0 24px" }}>
        {/* HERO */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              overflow: "hidden",
              marginBottom: 16,
              border: "4px solid #9b5de5",
            }}
          >
            <img
              src="/images/avatar.jpg"
              alt="Ana Ganfornina"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <h1 style={{ fontSize: "2.5rem", fontWeight: 700 }}>Ana Ganfornina</h1>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#9b5de5",
              marginTop: "-12px",
            }}
          >
            Mobile Developer
          </h2>
          <p style={{ color: "#737373", fontSize: "1.125rem", maxWidth: 760 }}>
            Specialized in creating unique mobile experiences with Swift and Kotlin.
          </p>

          {/* HERO BUTTONS */}
          <div className={styles.heroButtons}>
            <a href={about.path} className={`${styles.heroButton} ${styles.about}`}>
              About Me
            </a>

            <a href={work.path} className={`${styles.heroButton} ${styles.work}`}>
              View Projects →
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section>
          <SkillsGridHome skills={services} />
        </section>

        {/* CONTACT */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 12,
            marginTop: 32,
          }}
        >
          <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>Get in Touch</h2>
          <p style={{ color: "#737373", maxWidth: 760 }}>
            Let's talk about your project or idea. I'd love to collaborate with you!
          </p>

          <div className={styles.contactButtons}>
            <a
              href="https://www.linkedin.com/in/ana-ganfornina-arques/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactButton}
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>

            <a
              href="https://github.com/AnaGanfornina"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactButton}
            >
              <FaGithub size={18} /> GitHub
            </a>

            <a href="mailto:aganforques@gmail.com" className={styles.contactButton}>
              <MdEmail size={18} /> Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
