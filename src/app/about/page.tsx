import React from "react";
import {
  Avatar,
  Column,
  Heading,
  Icon,
  Row,
  Tag,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";

import { baseURL, about, person } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import SkillsGrid from "@/components/about/SkillsGrid";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  // Array de skills con iconos y colores personalizados
  const technicalSkills = [
    {
      title: "iOS Development",
      icon: "📱",
      color: "blue",
      items: [
        "Swift & SwiftUI",
        "UIKit & Auto Layout",
        "Objetctive C",
        "Core Data & SwiftData",
        "Combine",
        "Async/Await",
        "KeyChain"
      ],
    },
    {
      title: "Android Development",
      icon: "🤖",
      color: "green",
      items: [
        "Kotlin",
        "Jetpack Compose",
        "Material Design" 
      ],
    },
    {
      title: "Architecture",
      icon: "🏗️",
      color: "orange",
      items: [
        "Clean Architecture",
        "MVVM Pattern",
        "VIPPER Pattern",
        "Dependency Injection",
        "Unit Testing",
        "Delegate Pattern"
      ],
    },
    {
      title: "Backend",
      icon: "💾",
      color: "purple",
      items: [
        "RESTful APIs",
        "Firebase",
        "SQL Databases",
        "Vapor",
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      color: "green",
      items: [
        "XCode",
        "Android Studio",
        "Figma",
        "Postman",
        "Photoshop",
        "AutoCAD",
        "Sketchup",
        "Blender",
        "Final Cut"
      ],
    },
  ];

  const structure = [
    { title: about.intro.title, display: about.intro.display, items: [] },
    { title: about.work.title, display: about.work.display, items: about.work.experiences.map(e => e.company) },
    { title: about.studies.title, display: about.studies.display, items: about.studies.institutions.map(i => i.name) },
    { title: about.technical.title, display: about.technical.display, items: technicalSkills.map(s => s.title) },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {/* Columna lateral */}
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}

        {/* Columna principal */}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Heading variant="display-strong-xl">{person.name}</Heading>
          <Text variant="display-default-xs" onBackground="neutral-weak">
            {person.role}
          </Text>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={index} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text variant="heading-strong-l">{experience.company}</Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((a, i) => (
                        <Text as="li" variant="body-default-m" key={i}>
                          {a}
                        </Text>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((inst, i) => (
                  <Column key={i} fillWidth gap="4">
                    <Text variant="heading-strong-l">{inst.name}</Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {inst.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* SkillsGrid con diseño mejorado */}
          {about.technical.display && <SkillsGrid skills={technicalSkills} />}
        </Column>
      </Row>
    </Column>
  );
}