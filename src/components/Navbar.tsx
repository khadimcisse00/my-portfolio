"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import avatar from "@/assets/images/avatar.png";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true); // dark par défaut

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    // Applique le thème au chargement
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 shadow-sm bg-base-100/80 backdrop-blur-md border-b border-base-content/10">
      {/* NAVBAR À GAUCHE */}
      <div className="navbar-start">
        {/* Menu burger mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#profil">Profil</a></li>
            <li><a href="#formation">Parcours</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projects">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 btn btn-ghost">
          <Image src={avatar} alt="avatar Khadim Cisse" width={40} height={40} className="rounded-full" />
          <span className="font-bold text-lg hidden sm:inline">Khadim.dev</span>
        </Link>
      </div>

      {/* NAVBAR CENTRE desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm font-semibold">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#profil">Profil</a></li>
          <li><a href="#formation">Parcours</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* NAVBAR DROITE */}
      <div className="navbar-end flex items-center gap-2">
        {/* Bouton CV */}
        <a href="/CV_Khadim_Cisse.pdf" download className="btn btn-primary btn-sm">
          Télécharger CV
        </a>

        {/* Toggle Dark / Light */}
        <button onClick={toggleTheme} className="btn btn-ghost btn-sm btn-circle text-base-content">
          {isDark ? (
            // Icône soleil (passer en light)
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm10-6a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1zM3 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h1zm15.07-7.07a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0zM7.05 16.95a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0zm11.31 1.41a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 1 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41zM5.64 5.64a1 1 0 0 1-1.41 0l-.71-.71A1 1 0 0 1 4.93 3.52l.71.71a1 1 0 0 1 0 1.41zM12 6a6 6 0 1 1 0 12A6 6 0 0 1 12 6zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
            </svg>
          ) : (
            // Icône lune (passer en dark)
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.15 10.15 9.87 9.87 0 0 0 2.05-.23 8.1 8.1 0 0 1-7.14 4.32z"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}