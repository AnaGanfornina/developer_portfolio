"use client";
import React, { ReactNode } from "react";
import styles from "./SkillsGridHome.module.scss";

interface Skill {
  title: string;
  description?: ReactNode;
  icon?: string;
  color?: string;
}

interface SkillsGridProps {
  skills: Skill[];
}

export default function SkillsGridHome({ skills }: SkillsGridProps) {
  return (
    <div className={styles.gridContainer}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillCard} data-color={skill.color || "default"}>
          {skill.icon && (
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{skill.icon}</span>
            </div>
          )}
          <div className={styles.textWrapper}>
            <p className={styles.skillText}>
              <strong className={styles.titleText}>{skill.title}</strong>
              <br />
              <span className={styles.descText}>{skill.description}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}