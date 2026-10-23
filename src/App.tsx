import { Link, Routes, Route } from "react-router";
import {HomePage} from "./pages/HomePage";
import {CharactersPage} from "./pages/CharactersPage";
import {FaqPage} from "./pages/FaqPage";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080a09] text-stone-200 selection:bg-red-500/35 selection:text-red-100">
      <header className="relative z-10 border-b border-stone-700/60 bg-[#0b0d0c]/90 px-5 py-5 backdrop-blur-md sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="group flex w-fit items-center gap-3" aria-label="FROMpedia home">
            <span className="grid h-10 w-10 place-items-center rounded-sm border border-red-500/50 bg-red-500/10 text-lg text-red-300 shadow-[0_0_28px_rgba(239,68,68,0.16)] transition group-hover:border-red-300 group-hover:bg-red-500/20">F</span>
            <div>
              <h2 className="font-serif text-2xl font-black uppercase leading-none tracking-[0.2em] text-stone-100 sm:text-3xl">FROM<span className="text-red-400">pedia</span></h2>
              <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-stone-500">No road leads out</p>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="flex items-center gap-1 rounded-sm border border-stone-700/70 bg-stone-950/70 p-1 text-sm font-semibold text-stone-400 shadow-inner shadow-black/20">
            <Link className="rounded-sm px-3 py-2 transition hover:bg-stone-800 hover:text-red-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 sm:px-4" to="/">Home</Link>
            <Link className="rounded-sm px-3 py-2 transition hover:bg-stone-800 hover:text-red-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 sm:px-4" to="/characters">Characters</Link>
            <Link className="rounded-sm px-3 py-2 transition hover:bg-stone-800 hover:text-red-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 sm:px-4" to="/faq">FAQs</Link>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
