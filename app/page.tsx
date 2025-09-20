"use client";

import Image from "next/image";
import Link from "next/link";
import { Ellipsis, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuScale, setMenuScale] = useState(false);

    // animate menu scale
    useEffect(() => {
        if (menuOpen) {
            requestAnimationFrame(() => setMenuScale(true));
        } else {
            setMenuScale(false);
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
    }, []);

    return (
        <div className="min-h-screen px-6 sm:px-12 bg-[#1B1B1B]">
            <main>
                <div className="sticky top-0 z-20 pt-4 sm:pt-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="h-full flex items-center">
                            <Link href="/">
                                <Image
                                    src="/logo.svg"
                                    alt="Logo"
                                    width={48}
                                    height={48}
                                    className="invert sm:w-16 sm:h-16 w-12 h-12"
                                />
                            </Link>
                        </div>

                        <div className="hidden sm:flex gap-8 text-lg items-center justify-center px-6 py-2 rounded-lg backdrop-blur bg-[#232323]/60">
                            <Link href="/about" className="hover:underline">
                                About
                            </Link>
                            <span>|</span>
                            <Link href="/projects" className="hover:underline">
                                Projects
                            </Link>
                        </div>

                        <div className="text-lg flex items-center justify-center px-3 py-2 sm:px-6 sm:py-2 rounded-lg backdrop-blur bg-[#232323]/60">
                            <Link href="/contact" className="hidden sm:block hover:underline">
                                Contact
                            </Link>

                            <Ellipsis
                                className={`sm:hidden cursor-pointer ${menuOpen ? "hidden" : ""}`}
                                onClick={() => setMenuOpen(true)}
                            />
                            <X
                                className={`sm:hidden cursor-pointer ${menuOpen ? "" : "hidden"}`}
                                onClick={() => setMenuOpen(false)}
                            />
                        </div>
                    </div>
                </div>

                {menuOpen && (
                    <div
                        className={`fixed top-4 inset-x-4 z-10 rounded-xl bg-black/85 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-out ${menuScale ? "scale-100" : "scale-0"
                            }`}
                        style={{ transformOrigin: "top right" }}
                    >
                        <div className="flex flex-col items-center justify-center py-30 gap-6 text-xl">
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

                <div
                    className={`mt-6 sm:mt-10 flex justify-center items-center transition-filter duration-300 ${menuOpen ? "blur-sm pointer-events-none select-none" : ""
                        }`}
                >
                    <h1>Hi, Im Yuan.</h1>
                </div>
            </main>

            <footer></footer>
        </div>
    );
}
