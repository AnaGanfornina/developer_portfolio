"use client";

import { Heading, Text, Button, Column, Row, Flex, Line } from "@once-ui-system/core";
import { about, work } from "@/resources";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SkillsGridHome from "@/components/home/SkillsGridHome";

export default function Home() {
  const services = [
    {
      title: "iOS Development",
      description: "Aplicaciones nativas en Swift con enfoque en rendimiento y experiencia de usuario.",
      icon: "",
      color: "blue",
    },
    {
      title: "Android Development",
      description: "Apps Android modernas con Kotlin y las últimas características de la plataforma.",
      icon: "🤖",
      color: "green",
    },
    {
      title: "UI/UX Design",
      description: "Interfaces atractivas e intuitivas siguiendo guías de diseño.",
      icon: "🎨",
      color: "purple",
    },
  ];

  return (
    <Flex direction="column" gap="xxl" paddingY="16" align="center">
      <Column fillWidth maxWidth="1200px" paddingX="24">
        {/* 🌟 HERO */}
        <Column align="center" gap="m">
          <Heading variant="display-strong-l">Ana Ganfornina</Heading>
          <Heading
            variant="heading-strong-l"
            style={{ color: "#9b5de5", marginTop: "-12px" }}
          >
            Mobile Developer
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak" align="center">
            Especializada en crear experiencias móviles únicas con Swift, Kotlin y Flutter.
          </Text>
          <Row gap="12" paddingTop="12">
            <Button href={about.path} variant="secondary" size="m">
              Sobre mí
            </Button>
            <Button href={work.path} variant="primary" size="m" arrowIcon>
              Ver proyectos
            </Button>
          </Row>
        </Column>

        <Line variant="solid" marginY="8" />

        {/* 💡 SERVICES */}
        <SkillsGridHome skills={services} />

        <Line variant="solid" marginY="8" />

        {/* 💌 CONTACT */}
        <Column align="center" gap="l" maxWidth="m">
          <Heading variant="heading-strong-l" style={{ color: "#9b5de5" }}>
            Get in Touch
          </Heading>
          <Text variant="heading-default-m" onBackground="neutral-weak" align="center">
            Hablemos sobre tu proyecto o idea. ¡Me encantaría colaborar contigo!
          </Text>

          <Row wrap gap="12" justify="center" paddingTop="12">
            <Button
              as="a"
              href="https://www.linkedin.com/in/ana-ganfornina"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="l"
            >
              <FaLinkedin size={22} /> LinkedIn
            </Button>
            <Button
              as="a"
              href="https://github.com/ana-ganfornina"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="l"
            >
              <FaGithub size={22} /> GitHub
            </Button>
            <Button
              as="a"
              href="mailto:ana.ganfornina@example.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="l"
            >
              <MdEmail size={22} /> Email
            </Button>
          </Row>
        </Column>
      </Column>
    </Flex>
  );
}
