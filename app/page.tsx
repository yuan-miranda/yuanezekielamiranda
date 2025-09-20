"use client";

import Image from "next/image";
import Link from "next/link";
import { Ellipsis, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
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

                        <div className="hidden sm:flex gap-8 text-lg px-6 py-2 rounded-lg backdrop-blur bg-[#232323]/60">
                            <Link href="/about" className="hover:underline">
                                About
                            </Link>
                            <span>|</span>
                            <Link href="/projects" className="hover:underline">
                                Projects
                            </Link>
                        </div>

                        <div className="text-lg flex px-3 py-2 sm:px-6 sm:py-2 rounded-lg backdrop-blur bg-[#232323]/60">
                            <Link href="/contact" className="hidden sm:block hover:underline">
                                Contact
                            </Link>

                            <div className="relative sm:hidden w-6 h-6">
                                <Ellipsis
                                    className={`absolute top-0 left-0 cursor-pointer transition-opacity duration-300
                                        ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
                                        }`} onClick={() => setMenuOpen(true)}
                                />
                                <X
                                    className={`absolute top-0 left-0 cursor-pointer transition-opacity duration-300
                                        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                                        }`} onClick={() => setMenuOpen(false)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {showMenu && (
                    <div
                        className={`fixed top-5 inset-x-4 z-10 rounded-xl bg-black shadow-lg transform transition-transform duration-300 ease-out
                            ${menuScale ? "scale-100" : "scale-0"}
                            ${menuFade ? "opacity-100" : "opacity-0"}
                        `} style={{ transformOrigin: "top right" }}
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

                <div
                    className={`mt-6 sm:mt-10 flex justify-center items-center transition-filter duration-300 ${menuOpen ? "blur-sm pointer-events-none select-none" : ""
                        }`}
                >
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nulla labore, neque qui, accusamus aperiam quod nostrum fuga facere aspernatur eos dignissimos! Cumque ex quas a modi voluptate dolorum libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, soluta sunt aut omnis quas quisquam, necessitatibus placeat recusandae voluptatibus minus labore aperiam sint, atque nisi? Voluptatibus ad repellat nobis consequatur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit odit officiis voluptate suscipit minima, architecto labore cum, sapiente explicabo illo dolorem. Beatae optio cupiditate eaque sequi accusamus natus dolores assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eius odio optio suscipit iste et ducimus, numquam nostrum accusamus ratione doloremque eos animi aliquid hic a ipsum! Esse, magnam eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aliquam, accusamus nostrum obcaecati suscipit vero sapiente dolore, vel cum, possimus eius temporibus accusantium pariatur magni qui voluptatem culpa corporis facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptatum aliquid quo debitis impedit voluptas culpa quaerat provident, earum quidem odio iure asperiores optio fugiat aperiam tempora cumque numquam dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eius, excepturi earum est repellendus itaque officiis veritatis quia magni facere, dolorum placeat quae. Eos, saepe. Enim minus inventore hic iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, numquam quis aliquid iure doloribus at facere! Ipsa dolorem quam minus deserunt quia, saepe necessitatibus maxime libero magni beatae repudiandae doloribus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est minima aliquam dolorum magni, totam beatae, porro iste voluptatem quasi vitae quibusdam libero numquam illum minus architecto distinctio ex! Eos, ut.</h1>
                </div>
            </main>

            <footer></footer>
        </div>
    );
}
