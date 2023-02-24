import React from "react";
import PokemonCard from "./PokemonCard/PokemonCard";
import pokemonsJson from "./api/pokemons.json";

const Pokemons = ({ type }) => {
  let pokemonsBytype = pokemonsJson[type];

  return (
    <>
      {pokemonsBytype.map((elemento) => {
        return <PokemonCard key={elemento.id} {...elemento} type={type} />;
      })}
    </>
  );
};

export default Pokemons;
