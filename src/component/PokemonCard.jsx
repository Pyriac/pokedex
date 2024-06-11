function PokemonCard({ pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>}

      <h2>{pokemon.name}</h2>
    </figure>
  );
}

export default PokemonCard;
