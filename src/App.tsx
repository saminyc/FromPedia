function App() {
  const showName = "FROMpedia";
  const characterName = "Boyd Stevens";
  const characterRole = "Sheriff";

  return (
    <div>
      <h1>{showName}</h1>
      <p>Your guide to the mysteries of FROM.</p>
      <p>Featured Character: {characterName}</p>
      <p>Role: {characterRole}</p>
    </div>
  );
}

export default App;