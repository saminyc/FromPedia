import { useState } from "react";
import characters from "./data/characters";
import CharacterCard from "./components/CharacterCard";
import SeasonFilter from "./components/SeasonFilter";

function App() {
  const [selectedSeason, setSelectedSeason] = useState<number>(0);

  const filteredCharacters = characters.filter((character) => {
    return (
      selectedSeason === 0 ||
      character.seasons.includes(selectedSeason)
    );
  });

  return (
    <main>
      <h1>FROMpedia</h1>
      <h2>Characters</h2>

      <SeasonFilter
        selectedSeason={selectedSeason}
        onSeasonChange={setSelectedSeason}
      />

      {filteredCharacters.map((character) => {
        return (
          <CharacterCard
            key={character.id}
            name={character.name}
            role={character.role}
          />
        );
      })}
    </main>
  );
}

export default App;