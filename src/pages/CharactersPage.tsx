import { useState } from "react";
import {characters} from "../data/characters";
import {CharacterCard} from "../components/CharacterCard";
import {CharacterSearch} from "../components/CharacterSearch";
import {SeasonFilter} from "../components/SeasonFilter";

export function CharactersPage() {
  const [selectedSeason, setSelectedSeason] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCharacters = characters.filter((character) => {
    const matchesSeason =
      selectedSeason === 0 ||
      character.seasons.includes(selectedSeason);

    const matchesSearch = character.name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());

    return matchesSeason && matchesSearch;
  });

  return (
    <section className="space-y-8">
      <div className="border-l-2 border-red-500 pl-5 sm:pl-7">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-red-400">Residents &amp; visitors</p>
        <h1 className="font-serif text-5xl font-black uppercase tracking-tight text-stone-100 sm:text-6xl">Character <span className="text-red-400">Files</span></h1>
        <p className="mt-3 max-w-2xl leading-7 text-stone-400">Search the people caught inside the town and trace which seasons their stories appear in.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-sm border border-stone-700/70 bg-stone-900/60 p-5 shadow-lg shadow-black/15 sm:p-6">
          <SeasonFilter selectedSeason={selectedSeason} onSeasonChange={setSelectedSeason} />
        </div>

        <div className="rounded-sm border border-stone-700/70 bg-stone-900/60 p-5 shadow-lg shadow-black/15 sm:p-6">
          <CharacterSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <button className="mt-5 border border-stone-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-300 transition hover:border-red-500/70 hover:text-red-300 disabled:cursor-not-allowed disabled:border-stone-800 disabled:text-stone-600" type="button" onClick={() => setSearchQuery("")} disabled={searchQuery.length === 0}>
            Clear Search
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 border-y border-stone-800 py-4">
        <span className="h-2 w-2 animate-pulse rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.9)]" />
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-400"><span className="text-red-300">{filteredCharacters.length}</span> characters found</p>
      </div>

      {filteredCharacters.length === 0 ? (
        <p className="border border-dashed border-stone-700 bg-stone-900/50 px-6 py-12 text-center text-stone-400">No characters found. Try another name or season.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} name={character.name} role={character.role} image={character.image} />
          ))}
        </div>
      )}
    </section>
  );
}
