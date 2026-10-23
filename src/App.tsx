import { useState } from "react";
import {characters} from "./data/characters";
import {CharacterCard} from "./components/CharacterCard";
import {SeasonFilter} from "./components/SeasonFilter";
import { CharacterSearch } from "./components/CharacterSearch";
import { FAQItem } from "./components/FaqItem";
import { faqs } from "./data/faqs";

function App() {
  const [selectedSeason, setSelectedSeason] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCharacters = characters.filter((character) => {
    const matchesSeason =
      selectedSeason === 0 ||
      character.seasons
        .includes(selectedSeason);

    const matchesSearch = character.name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());

    return matchesSeason && matchesSearch;
  });

  return (
    <main>
      <h1>FROMpedia</h1>
      <h2>Characters</h2>

      <SeasonFilter
        selectedSeason={selectedSeason}
        onSeasonChange={setSelectedSeason}
      />

      <CharacterSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <button onClick={() => setSearchQuery("")}
        disabled={searchQuery.length === 0}
      >
        Clear Search
      </button>
      <p>{filteredCharacters.length} characters found</p>

      {filteredCharacters.length === 0 ? (
        <p>No characters found</p>
      )
        : (filteredCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            role={character.role}
          />
        )))
      }
      <section aria-labelledby="faq-heading">
  <h2 id="faq-heading">Frequently Asked Questions</h2>
  {
    faqs.map((faq) => {
      return (<FAQItem
        key={faq.id}
        question={faq.question}
        answer={faq.answer}
      />)
    })
  }
 
</section>

      
    </main>
  );
}

export default App;