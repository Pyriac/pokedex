import { useState } from "react";
import "./App.css";
import PokemonCard from "./component/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setIndex] = useState(0);

  const HandleClickNegative = () => setIndex(pokemonIndex - 1);
  const HandleClickPositive = () => setIndex(pokemonIndex + 1);

  return (
    <>
      <h2>Pokemon Index : {pokemonIndex + 1}</h2>

      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      {pokemonIndex > 0 ? (
        <button onClick={HandleClickNegative}>Précedent</button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={HandleClickPositive}>Suivant</button>
      ) : null}
    </>
  );
}

export default App;
