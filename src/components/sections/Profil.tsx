import Image from "next/image";
import profilPic from "@/assets/images/avatar.png"; 

export default function ProfilSection() {
  return (
    <section
      id="profil"
      className="min-h-screen flex flex-col items-center justify-center bg-base-200 py-20 px-6"
    >
      {/* Titre principal */}
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
        À propos de moi
      </h2>

      {/* Conteneur principal (image + texte) */}
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-10">
        {/* Image à gauche */}
        <div className="flex-shrink-0">
          <div className="mask mask-squircle w-64 h-64 overflow-hidden shadow-xl">
            <Image
              src={profilPic}
              alt="Photo de profil Khadim Cisse"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Texte à droite */}
        <div className="text-justify leading-relaxed md:text-lg space-y-4">
          <p>
            Je m’appelle <span className="font-semibold text-primary">Khadim Cisse</span>, 
            développeur web junior avec une orientation back‑end. 
            J’ai effectué l’ensemble de mes études supérieures en alternance, 
            ce qui m’a permis de travailler sur des projets concrets en entreprise 
            tout en consolidant mes compétences techniques.
          </p>

          <p>
            Au cours de mes expériences professionnelles, j’ai participé au 
            développement et à la maintenance d’applications métiers, 
            ainsi qu’à la gestion et à l’exploitation de bases de données SQL. 
            Ces expériences m’ont permis de mieux comprendre les enjeux 
            liés à la logique métier, à la qualité du code et à la fiabilité 
            des applications.
          </p>

          <p>
            Aujourd’hui, je travaille principalement avec 
            <span className="font-semibold"> Next.js</span>, 
            <span className="font-semibold"> TypeScript</span>, 
            <span className="font-semibold"> Node.js</span>, 
            <span className="font-semibold"> Python</span> et 
            <span className="font-semibold"> SQL (MySQL, PostgreSQL, SQL Server)</span>.
            <br />
            Je suis actuellement en <span className="text-primary font-medium">
              Master Ingénierie du Web
            </span> et je recherche un poste de 
            <span className="font-semibold"> développeur web junior / back‑end</span>, 
            au sein d’une équipe où je pourrai continuer à apprendre 
            et évoluer techniquement.
          </p>
        </div>
      </div>
    </section>
  );
}
