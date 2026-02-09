import Image from "next/image";
import bgImage from "@/assets/images/background.jpg"; 
export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/*Image de fond plein écran */}
      <Image
        src={bgImage}
        alt="Image de fond"
        fill
        className="object-cover scale-105 brightness-70" 
        priority
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-4 text-white max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-content mb-6">
          Bienvenue sur mon portfolio 🚀
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Je suis <span className="font-semibold">Khadim Cissé</span>, 
          développeur passionné par la création d’expériences web modernes et performantes.
          Découvrez mes projets, mes compétences et ma formations.
        </p>
      </div>
    </section>
  );
}
