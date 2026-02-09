export default function Home() {
  return (
    <div>
      <section id="home" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-primary">Section Accueil</h1>
      </section>
      <section id="profil" className="h-screen flex items-center justify-center bg-base-200">
        <h1 className="text-4xl font-bold">Profil</h1>
      </section>
      <section id="skills" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Compétences</h1>
      </section>
      <section id="projects" className="h-screen flex items-center justify-center bg-base-200">
        <h1 className="text-4xl font-bold">Projets</h1>
      </section>
      <section id="contact" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>

    </div>
  );
}
