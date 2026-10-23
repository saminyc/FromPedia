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
    <section>
      <h1>Characters</h1>

      <SeasonFilter
        selectedSeason={selectedSeason}
        onSeasonChange={setSelectedSeason}
      />

      <CharacterSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <button
        type="button"
        onClick={() => setSearchQuery("")}
        disabled={searchQuery.length === 0}
      >
        Clear Search
      </button>

      <p>{filteredCharacters.length} characters found</p>

      {filteredCharacters.length === 0 ? (
        <p>No characters found. Try another name or season.</p>
      ) : (
        filteredCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            role={character.role}
          />
        ))
      )}
    </section>
  );
}