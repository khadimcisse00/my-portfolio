"use client";

import { formations, experiences, type FormationItem, type ExperienceItem } from "@/data/formation";

type CardProps = {
  titre: string;
  sousTitre: string;
  ville: string;
  periode: string;
  description: string;
  type: "formation" | "experience";
};

function TimelineCard({ titre, sousTitre, ville, periode, description, type }: CardProps) {
  return (
    <div className="flex gap-4 group">
      {/* Point + ligne verticale */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full mt-1 shrink-0 border-2
            ${type === "formation"
              ? "bg-primary border-primary"
              : "bg-secondary border-secondary"
            }`}
        />
        <div className="w-0.5 bg-base-content/10 flex-1 mt-1" />
      </div>

      {/* Contenu de la card */}
      <div className="pb-8 w-full">
        <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-300 border border-base-content/5">
          <div className="card-body p-5">
            {/* Période */}
            <span className={`text-xs font-bold uppercase tracking-widest
              ${type === "formation" ? "text-primary" : "text-secondary"}`}>
              {periode}
            </span>

            {/* Titre */}
            <h3 className="font-bold text-base-content text-base md:text-lg leading-tight mt-1">
              {titre}
            </h3>

            {/* Établissement / Entreprise + Ville */}
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="font-semibold text-sm text-base-content/80">
                {sousTitre}
              </span>
              <span className="text-base-content/30">•</span>
              <span className="text-sm text-base-content/50">
                📍 {ville}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-base-content/60 mt-2 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FormationSection() {
  return (
    <section
      id="formation"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-base-200"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
        Parcours
      </h2>
      <p className="text-base-content/70 mb-16 text-center max-w-xl">
        Mon parcours académique et mes expériences professionnelles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">

        {/* Colonne Formations */}
        <div>
          <h3 className="text-lg font-bold text-base-content uppercase tracking-widest mb-8 border-b border-base-content/10 pb-3">
            🎓 Formations
          </h3>
          {formations.map((f: FormationItem) => (
            <TimelineCard
              key={f.titre}
              titre={f.titre}
              sousTitre={f.etablissement}
              ville={f.ville}
              periode={f.periode}
              description={f.description}
              type="formation"
            />
          ))}
        </div>

        {/* Colonne Expériences */}
        <div>
          <h3 className="text-lg font-bold text-base-content uppercase tracking-widest mb-8 border-b border-base-content/10 pb-3">
            💼 Expériences
          </h3>
          {experiences.map((e: ExperienceItem) => (
            <TimelineCard
              key={e.titre}
              titre={e.titre}
              sousTitre={e.entreprise}
              ville={e.ville}
              periode={e.periode}
              description={e.description}
              type="experience"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
