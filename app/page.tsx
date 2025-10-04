// app/page.tsx
"use client";

import Header from "../components/Header";

export default function Home() {
    return (
        <div className="min-h-screen px-6 sm:px-12 max-w-7xl mx-auto">
            <Header />
            <main>
                <div className="flex flex-col pt-32 pb-8 sm:pb-24 sm:pt-96">
                    <span className="text-4xl sm:text-9xl font-mono font-bold">Hi, I&apos;m Yuan
                    </span>
                    <span className="text-2xl sm:text-6xl font-serif">Frontend Developer</span>
                </div>

                <div className="max-w-2xl pb-16 sm:pb-48 text-justify">
                    <span
                        className="sm:text-2xl font-sans"
                    >
                        Hey there! I&apos;m Yuan Ezekiel A. Miranda, an unemployed developer from San Luis, Pampanga, and a student at STI College Baliuag.
                        This is my personal website 2.0 — LMAOOO
                    </span>
                </div>


                <hr className="border-t-2 pb-4 sm:pb-6 border-gray-300" />

                <div>
                    <p className="text-lg sm:text-2xl pb-4 sm:pb-6 font-sans uppercase">Projects</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 pb-32 sm:pb-48">
                    <a href="#">
                        <div className="border border-gray-300 rounded-lg p-6">
                            <h3 className="text-lg font-bold">Lorem</h3>
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, sapiente cum quibusdam tempore dolorem aliquid quia neque labore dignissimos ullam nostrum repellat totam, cupiditate similique ducimus laborum commodi modi inventore?</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="border border-gray-300 rounded-lg p-6">
                            <h3 className="text-lg font-bold">Lorem</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, rerum maiores nobis dicta eum consequatur. Porro unde dolorem modi facere adipisci repellat distinctio asperiores sit itaque excepturi! Dolores, dignissimos pariatur.</p>
                        </div>
                    </a>
                </div>
            </main>

            <footer></footer>
        </div>
    );
}
