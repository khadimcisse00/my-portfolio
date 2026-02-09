"use client";
import Link from "next/link";
import { useEffect } from "react";
//Page pricipale de l'appli, elle contient la barre de navigation et les routes vers les différentes pages de l'appli (section scroll unique)
export default function Navbar() {
    return (
        <div>
            {/* SECTION ACCUEIL */}
            <section
                id='home'
                className="h-screen flex items-centter justify-centrer bg-base-200">
                <h1 className="text-5xl fond-bold text-primary mb-4">
                    Bienvenue sur mon portfolio
                </h1>
                <p className="text-lg max-w-2xl">
                    Bienvenue sur mon portfolio ! Je suis Khadim CISSE, développeur passionné. Sur ce site, vous trouverez une sélection de mes projets les plus récents, ainsi que des informations sur mes compétences et mon parcours professionnel. N'hésitez pas à explorer les différentes sections pour en savoir plus sur moi et mes réalisations. Si vous avez des questions ou souhaitez collaborer, n'hésitez pas à me contacter via la section "Contact". Merci de votre visite !
                </p>

            </section>
            {/* SECTION PROFIL */}
            <section
                id='profil'
                className="h-screen flex items-centter justify-centrer">
                <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
                <p className="max-w-3xl text-center">
                    Je m’appelle Khadim Cisse, développeur web junior avec une orientation back-end.
                    J’ai effectué l’ensemble de mes études supérieures en alternance, ce qui m’a permis de travailler sur des projets concrets en entreprise tout en consolidant mes compétences techniques.

                    Au cours de mes expériences professionnelles, j’ai participé au développement et à la maintenance d’applications métiers, ainsi qu’à la gestion et à l’exploitation de bases de données SQL. Ces expériences m’ont permis de mieux comprendre les enjeux liés à la logique métier, à la qualité du code et à la fiabilité des applications.

                    Aujourd’hui, je travaille principalement avec Next.js, TypeScript, Node.js, Python et SQL (MySQL, PostgreSQL, SQL Server).
                </p>
            </section>
            {/* SECTION Compétences */}
            <section
                id='skills'
                className="h-screen flex flex-col items-centter justify-centrer bg-base-200">
                <h2 className="text-4xl font-bold mb-8">Compétences</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="card bg-base-100 shadow-md p-4 text-center">
                        <h3 className="font-semibold text-primary">React</h3>
                    </div>
                    <div className="card bg-base-100 shadow-md p-4 text-center">
                        <h3 className="font-semibold text-primary">Next.js</h3>
                    </div>
                    <div className="card bg-base-100 shadow-md p-4 text-center">
                        <h3 className="font-semibold text-primary">Node.js</h3>
                    </div>
                    <div className="card bg-base-100 shadow-md p-4 text-center">
                        <h3 className="font-semibold text-primary">TailwindCSS</h3>
                    </div>
                </div>
            </section>
            {/* SECTION Projets */}
            <section
                id="projects"
                className="h-screen flex flex-col items-center justify-center"
            >
                <h2>Projets réalisé</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow-md p-6">
                        <h3 className="font-semibold text-primary">Portfolio</h3>
                        <p>Site Ventrine avec Next.JS & DaisyUI</p>
                    </div>
                    <div className="card bg-base-100 shadow-md p-6">
                        <h3 className="font-semibold text-primary">API Node.js</h3>
                        <p>Back-end REST avec Express et Prisma.</p>
                    </div>
                    <div className="card bg-base-100 shadow-md p-6">
                        <h3 className="font-semibold text-primary">Dashboard Admin</h3>
                        <p>Interface moderne Taiwind + Chart.js</p>
                    </div>
                </div>
            </section>
            {/* SECTION Contact */}
            <section id="contact"
            className="h-screen flex flex-col items-center jsutify-center bg-base-200"
            >
                <h2 className="text-4xl font-bold mb-6">Contact</h2>
                <p>khadimcisse00@gmail.com</p>
                <div className="mt-4 flex gap-4">
                    <a href="home" className="btn btn-primary">Retour en haut</a>
                </div>

            </section>

        </div>
    )
        ;
}
