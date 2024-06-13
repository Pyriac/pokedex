import { useState } from "react";
import "./App.css";
import PokemonCard from "./component/PokemonCard";
import NavBar from "./component/NavBar";
import pokemonList from "./utils/pokemonList";

function App() {
  const [pokemonIndex, setIndex] = useState(0);

  return (
    <>
      <h2>Pokemon Index : {pokemonIndex + 1}</h2>

      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>

      <NavBar
        setIndex={setIndex}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
      />
    </>
  );
}

export default App;
