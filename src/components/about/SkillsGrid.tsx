"use client";
import React, { ReactNode } from "react";
import styles from "./SkillsGrid.module.scss";
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

export default function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <Column fillWidth marginBottom="40">
      <Heading 
        as="h2" 
        id="Technical Skills"
        variant="display-strong-s" 
        marginBottom="l"
      >
        Technical Skills
      </Heading>
      
      <div className={styles.gridContainer}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={styles.skillCard}
            data-color={skill.color || 'default'}
          >
            <div className={styles.cardHeader}>
              {skill.icon && (
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{skill.icon}</span>
                </div>
              )}
              <Text 
                variant="heading-strong-l" 
                className={styles.skillTitle}
              >
                {skill.title}
              </Text>
            </div>
            
            {skill.description && (
              <Text 
                variant="body-default-m" 
                onBackground="neutral-weak" 
                marginBottom="16"
                className={styles.description}
              >
                {skill.description}
              </Text>
            )}
            
            {skill.items && skill.items.length > 0 && (
              <ul className={styles.skillList}>
                {skill.items.map((item, i) => (
                  <li key={i} className={styles.skillItem}>
                    <span className={styles.bullet}>•</span>
                    <span className={styles.itemText}>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Column>
  );
}