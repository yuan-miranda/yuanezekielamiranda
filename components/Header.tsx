// components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // load theme
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle("dark", storedTheme === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    // save theme
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    }

    return (
        <>
            <div className="pt-8 sm:pt-12">
                <div className="flex items-center justify-between h-16">
                    <div className="h-full flex items-center">
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={48}
                                height={48}
                                className={`sm:w-16 sm:h-16 w-12 h-12 transition-filter duration-200 ${theme === "dark" ? "invert" : ""}`}
                            />
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <div>
                            {theme === "light" ? (
                                <Moon className="cursor-pointer w-6 h-7" onClick={toggleTheme} />
                            ) : (
                                <Sun className="cursor-pointer w-6 h-7" onClick={toggleTheme} />
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}