export type FormationItem = {
  titre: string;
  etablissement: string;
  ville: string;
  periode: string;
  description: string;
};

export type ExperienceItem = {
  titre: string;
  entreprise: string;
  ville: string;
  periode: string;
  description: string;
};

export const formations: FormationItem[] = [
  {
    titre: "Master Ingénierie du Web — BAC +5",
    etablissement: "ESGI Campus Sciences U",
    ville: "Lyon",
    periode: "2024 → Aujourd'hui",
    description: "Formation en ingénierie du web, spécialisation développement full-stack.",
  },
  {
    titre: "Bachelor RPI — BAC +3",
    etablissement: "Isitech",
    ville: "Lyon",
    periode: "2021 → 2024",
    description: "Responsable de Projets Informatiques.",
  },
  {
    titre: "DAEU B",
    etablissement: "Jean Monnet",
    ville: "Saint-Étienne",
    periode: "2020 → 2021",
    description: "Diplôme d'accès aux études universitaires.",
  },
  {
    titre: "Communication Visuelle & Plurimedia",
    etablissement: "Stimmatini",
    ville: "Vérone, Italie",
    periode: "2016 → 2019",
    description: "Compétences Adobe : Photoshop, Illustrator, InDesign.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    titre: "Développeur Junior",
    entreprise: "Exo Partners",
    ville: "Charbonnières-les-Bains",
    periode: "2023 → 2026",
    description:
      "Paramétrage applicatif, optimisation SQL, personnalisation BDD, intégration de solutions comptables.",
  },
  {
    titre: "Technicien ERP",
    entreprise: "T'RHEA - Viandes de Bresse",
    ville: "Bourg-en-Bresse",
    periode: "2021 → 2023",
    description:
      "Gestion ERP (VIF & Qlikview), mise en place de flux, gestion de BDD et critères qualité.",
  },
];