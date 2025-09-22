// app/page.tsx
"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen px-6 sm:px-12">
            <main>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div
                    className={`mt-6 sm:mt-10 flex justify-center items-center transition-filter duration-300
                        ${menuOpen ? "blur-sm pointer-events-none select-none" : ""}`}
                >
                    <h1>Hello</h1>
                </div>
            </main>

            <footer></footer>
        </div>
    );
}
