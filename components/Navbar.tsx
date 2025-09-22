// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Ellipsis, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

type NavbarProps = {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
};

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
    const [menuScale, setMenuScale] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [menuFade, setMenuFade] = useState(false);

    // open/close animation
    useEffect(() => {
        if (menuOpen) {
            setShowMenu(true);
            const timeout = setTimeout(() => {
                setMenuScale(true);
                setMenuFade(true);
            }, 20);
            return () => clearTimeout(timeout);
        } else {
            setMenuScale(false);
            const timeout = setTimeout(() => setShowMenu(false), 300);
            const timeoutFade = setTimeout(() => setMenuFade(false), 125);
            return () => {
                clearTimeout(timeout);
                clearTimeout(timeoutFade);
            };
        }
    }, [menuOpen]);

    // close menu when sm
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [setMenuOpen]);

    return (
        <>
            <div className="sticky top-0 z-20 pt-4 sm:pt-4">
                <div className="flex items-center justify-between h-16">
                    <div className="h-full flex items-center">
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={48}
                                height={48}
                                className={`sm:w-16 sm:h-16 w-12 h-12 transition-filter duration-300
                                        ${menuOpen ? "invert" : "dark:invert"}`}
                            />
                        </Link>
                    </div>

                    <div className="hidden sm:flex gap-8 text-lg px-6 py-3 rounded-lg backdrop-blur dark:bg-[#232323]/60 bg-black/90 text-white">
                        <Link href="/about" className="hover:underline">
                            About
                        </Link>
                        <span>|</span>
                        <Link href="/projects" className="hover:underline">
                            Projects
                        </Link>
                    </div>


                    <div className="flex items-center gap-4">
                        <Sun className="cursor-pointer w-6 h-7" />
                        <Moon className="cursor-pointer w-6 h-7 hidden" />

                        <div className="text-lg flex px-3 py-2 sm:px-6 sm:py-3 rounded-lg backdrop-blur dark:bg-[#232323]/60 bg-black/90 text-white">
                            <Link href="/contact" className="hidden sm:block hover:underline">
                                Contact
                            </Link>

                            <div className="relative sm:hidden w-6 h-6">
                                <Ellipsis
                                    className={`absolute top-0 left-0 cursor-pointer transition-opacity duration-300
                                        ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
                                    onClick={() => setMenuOpen(true)}
                                />
                                <X
                                    className={`absolute top-0 left-0 cursor-pointer transition-opacity duration-300
                                        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                                    onClick={() => setMenuOpen(false)}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {showMenu && (
                <div
                    className={`fixed top-5 inset-x-4 z-10 rounded-xl bg-black text-white shadow-lg transform transition-transform duration-300 ease-out
                            ${menuScale ? "scale-100" : "scale-0"}
                            ${menuFade ? "opacity-100" : "opacity-0"}`}
                    style={{ transformOrigin: "top right" }}
                >
                    <div className="flex flex-col items-center justify-center py-30 gap-2 text-2xl">
                        <Link href="/about" className="hover:underline" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>
                        <Link href="/projects" className="hover:underline" onClick={() => setMenuOpen(false)}>
                            Projects
                        </Link>
                        <Link href="/contact" className="hover:underline" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}