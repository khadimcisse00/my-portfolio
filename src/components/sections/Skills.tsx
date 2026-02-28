"use client";

import { useEffect, useRef, useState } from "react";
import { skillsData, type SkillCategory } from "@/data/skills"; // ← import depuis le fichier dédié

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
    return (
      <div className="mb-5">
        {/* Nom à gauche + % à droite */}
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-base-content uppercase tracking-wider text-xs md:text-sm">
            {name}
          </span>
          <span className="text-primary font-bold text-sm">
            {animate ? `${level}%` : "0%"}
          </span>
        </div>
  
        {/* Barre fond = 100% bien visible */}
        <div className="w-full h-3 bg-gray-400/40 rounded-full overflow-hidden">
          {/* Barre remplie = niveau réel */}
          <div
            className="h-3 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: animate ? `${level}%` : "0%",
              background: "linear-gradient(to right, oklch(var(--p)), oklch(var(--s)))",
            }}
          />
        </div>
      </div>
    );
  }

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-base-100"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
        Compétences
      </h2>
      <p className="text-base-content/70 mb-14 text-center max-w-xl">
        Les technologies et compétences que j'ai développées au fil de mes
        expériences professionnelles et académiques.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {skillsData.map((category: SkillCategory) => (
          <div key={category.category}>
            <h3 className="text-center font-bold text-base-content/50 uppercase tracking-widest text-sm mb-6 border-b border-base-300 pb-2">
              {category.category}
            </h3>
            {category.skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                animate={animate}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}