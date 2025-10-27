"use client";

import React from "react";
import { Heading } from "@once-ui-system/core";
import { about, work } from "@/resources";
import SkillsGridHome from "@/components/home/SkillsGridHome";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const services = [
    {
      title: "iOS Development",
      description: "Native apps in Swift focused on performance and user experience.",
      icon: "",
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
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1200, // Este es el que define el ancho máximo del contenido
          paddingLeft: 24, // Este padding te da el margen lateral
          paddingRight: 24, // Este padding te da el margen lateral
          boxSizing: "border-box",
        }}
      >
        {/* HERO */}
        <section
          aria-labelledby="hero-title"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 12,
            marginBottom: 32,
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          <Heading id="hero-title" variant="display-strong-l">
            Ana Ganfornina
          </Heading>

          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#9b5de5",
              marginTop: "-12px",
              marginBottom: 0,
            }}
          >
            Mobile Developer
          </h2>

          <p
            style={{
              color: "var(--neutral-solid-medium, #737373)",
              fontSize: "1.125rem",
              maxWidth: 760,
              margin: "8px 0 0 0",
            }}
          >
            Specialized in creating unique mobile experiences with Swift and Kotlin.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              marginTop: 16,
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <a
              href={about.path}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 18px",
                borderRadius: 10,
                background: "transparent",
                border: "1px solid rgba(0,0,0,0.06)",
                textDecoration: "none",
                color: "inherit",
                fontWeight: 600,
                minWidth: 140,
              }}
            >
              About Me
            </a>

            <a
              href={work.path}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 18px",
                borderRadius: 10,
                background: "#9b5de5",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                minWidth: 140,
              }}
            >
              View Projects&nbsp;<span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* Separador */}
        <div
          style={{
            height: 1,
            background: "rgba(0,0,0,0.06)",
            margin: "24px 0",
          }}
          aria-hidden
        />

        {/* SERVICES (ahora dentro de SkillsGridHome con su propio título) */}
        <section aria-labelledby="services">
          <SkillsGridHome skills={services} />
        </section>

        {/* Separador */}
        <div
          style={{
            height: 1,
            background: "rgba(0,0,0,0.06)",
            margin: "24px 0",
          }}
          aria-hidden
        />

        {/* CONTACT */}
        <section
          aria-labelledby="contact-title"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 12,
            marginBottom: 16,
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          <Heading
            id="contact-title"
            as="h2"
            variant="display-strong-s"
            marginBottom="l"
            style={{ textAlign: "center" }}
          >
            Get in Touch
          </Heading>

          <p style={{ color: "var(--neutral-solid-medium, #737373)", maxWidth: 760 }}>
            Let's talk about your project or idea. I’d love to collaborate with you!
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 12,
            }}
          >
            <a
              href="https://www.linkedin.com/in/ana-ganfornina"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                borderRadius: 10,
                background: "transparent",
                border: "1px solid rgba(0,0,0,0.06)",
                textDecoration: "none",
                color: "inherit",
                fontWeight: 600,
              }}
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>

            <a
              href="https://github.com/ana-ganfornina"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                borderRadius: 10,
                background: "transparent",
                border: "1px solid rgba(0,0,0,0.06)",
                textDecoration: "none",
                color: "inherit",
                fontWeight: 600,
              }}
            >
              <FaGithub size={18} /> GitHub
            </a>

            <a
              href="mailto:ana.ganfornina@example.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                borderRadius: 10,
                background: "transparent",
                border: "1px solid rgba(0,0,0,0.06)",
                textDecoration: "none",
                color: "inherit",
                fontWeight: 600,
              }}
            >
              <MdEmail size={18} /> Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}