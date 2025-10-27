"use client";
import React, { ReactNode } from "react";
import styles from "./SkillsGridHome.module.scss";
import { Text, Heading, Column } from "@once-ui-system/core";

interface Skill {
  title: string;
  description?: ReactNode;
  items?: string[];
  icon?: string;
  color?: string;
}

interface SkillsGridProps {
  skills: Skill[];
}

export default function SkillsGridHome({ skills }: SkillsGridProps) {
  return (
    <Column fillWidth marginBottom="40">
      <Heading
        as="h2"
        id="Services"
        variant="display-strong-s"
        marginBottom="l"
        style={{ textAlign: "center" }}
      >
        Services
      </Heading>

      <div className={styles.gridContainer}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={styles.skillCard}
            data-color={skill.color || "default"}
          >
            {skill.icon && (
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{skill.icon}</span>
              </div>
            )}
            <div className={styles.textWrapper}>
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                className={styles.skillText}
              >
                <strong>{skill.title}</strong>
                <br />
                {skill.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Column>
  );
}