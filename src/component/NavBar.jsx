import PropTypes from "prop-types";

function NavBar({ pokemonList, setIndex }) {
  const HandleClick = (index) => () => setIndex(index);

  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={HandleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

NavBar.propTypes = {
  setIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
};

export default NavBar;
