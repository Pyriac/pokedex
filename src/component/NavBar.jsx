import PropTypes from "prop-types";

function NavBar({ setIndex, pokemonIndex, pokemonList }) {
  const HandleClickNegative = () => setIndex(pokemonIndex - 1);
  const HandleClickPositive = () => setIndex(pokemonIndex + 1);

  return (
    <>
      {pokemonIndex > 0 ? (
        <button onClick={HandleClickNegative}>Précedent</button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={HandleClickPositive}>Suivant</button>
      ) : null}
    </>
  );
}

NavBar.propTypes = {
  setIndex: PropTypes.func.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  pokemonList: PropTypes.array.isRequired,
};

export default NavBar;
