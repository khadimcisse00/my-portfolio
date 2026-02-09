"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import avatar from "@/assets/images/avatar.png";


export default function Navbar() {
    // Scroll fluide activé dès que la page charge
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
    }, []);

    return (
        <div className="navbar fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50 shadow-sm">
            {/*NAVBAR À GAUCHE */}
            <div className="navbar-start">

                {/* Menu burger (visible uniquement sur mobile) */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>

                    {/* Menu déroulant mobile */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#profil">Profil</a></li>
                        <li><a href="#skills">Compétences</a></li>
                        <li><a href="#projects">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Logo/avatar visible sur tous les écrans */}
                <Link href="#home" className="flex items-center gap-2 btn btn-ghost">
                    <Image
                        src={avatar}
                        alt="avatar Khadim Cissé"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="font-bold text-lg hidden sm:inline">Khadim.dev</span>
                </Link>
            </div>

            {/* --- NAVBAR CENTRALE (menu desktop) --- */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-sm font-semibold">
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#profil">Profil</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#projects">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            {/* --- NAVBAR À DROITE --- */}
            <div className="navbar-end flex items-center gap-2">
                {/* Bouton Télécharger CV */}
                <a
                    href="/CV_Khadim_Cisse.pdf"
                    download
                    className="btn btn-primary btn-sm"
                >
                    Télécharger CV
                </a>

                {/* Toggle Dark / Light Mode DaisyUI */}
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="dark" />

                    {/* soleil */}
                    <svg
                        className="swap-off fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5.64,17l-.71.71a1...Z" />
                    </svg>

                    {/* lune */}
                    <svg
                        className="swap-on fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21.64,13a1,1,0,0..." />
                    </svg>
                </label>
            </div>
        </div>
    );
}
