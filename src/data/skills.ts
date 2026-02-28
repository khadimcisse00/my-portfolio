export type Skill = {
    name: string;
    level: number;
  };
  
  export type SkillCategory = {
    category: string;
    skills: Skill[];
  };
  
  export const skillsData: SkillCategory[] = [
    {
      category: "Front-end",
      skills: [
        { name: "Next.js / React", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "HTML / CSS", level: 85 },
        { name: "Tailwind CSS", level: 70 },
      ],
    },
    {
      category: "Back-end",
      skills: [
        { name: "Node.js", level: 65 },
        { name: "Python", level: 60 },
        { name: "REST API", level: 70 },
        { name: "Express.js", level: 60 },
      ],
    },
    {
      category: "Base de données",
      skills: [
        { name: "SQL (MySQL / PostgreSQL)", level: 75 },
        { name: "SQL Server", level: 70 },
        { name: "Prisma ORM", level: 55 },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Travail en équipe", level: 90 },
        { name: "Adaptabilité", level: 85 },
        { name: "Autonomie", level: 80 },
        { name: "Communication", level: 75 },
      ],
    },
  ];