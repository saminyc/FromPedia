import { Link, Routes, Route } from "react-router";
import {HomePage} from "./pages/HomePage";
import {CharactersPage} from "./pages/CharactersPage";
import {FaqPage} from "./pages/FaqPage";

function App() {
  return (
    <div>
      <header>
        <h2>FROMpedia</h2>

        <nav aria-label="Main navigation">
          <Link to="/">Home</Link>{" "}
          <Link to="/characters">Characters</Link>{" "}
          <Link to="/faq">FAQs</Link>
        </nav>
      </header>

      <main>
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