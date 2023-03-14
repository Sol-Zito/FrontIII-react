import React, { useState } from "react";
import pokemonApi from "../../Pokemons/api/pokemons.json";

const FormPokemonFav = () => {
  const [userData, setUserData] = useState({
    name: "",
    edad: "",
    pokemon: "",
  });

  const validationPokemon = (pokemon) => {
    const pokemons = pokemonApi["electric"];
    const validPokemon = pokemons.some(
      (elemento) => elemento.name.toLowerCase() == pokemon.toLowerCase()
    );
    return validPokemon;
  };

  const validationName = (name) => {
    const nameWithoutSpace = name.trim();
    if (nameWithoutSpace.length > 1) {
      return true;
    } else {
      return false;
    }
  };

  const validationAge = (age) => {
    if (age > 0) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const pfav = e.target.pokemon.value;
    const nameValue = e.target.nombre.value;
    const ageValue = e.target.edad.value;
    
    const validPokemon = validationPokemon(pfav);
    const isNameValid = validationName(nameValue);
    const isAgeValid = validationAge(ageValue);
   
    if (isNameValid && isAgeValid && validPokemon) {
      alert(`Hola ${nameValue} tu pokemon favorito es ${pfav}`);
    } else if(!validPokemon && isNameValid && isAgeValid) {
      alert(`${pfav} no existe`)
    }else{
      alert("Alguno de los datos no son validos");
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmitForm}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <input
          placeholder="Nombre completo"
          name="nombre"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          placeholder="Edad"
          name="edad"
          onChange={(e) => setUserData({ ...userData, edad: e.target.value })}
        />
        <input
          placeholder="Pokemon favorito"
          name="pokemon"
          onChange={(e) =>
            setUserData({ ...userData, pokemon: e.target.value })
          }
        />
        <button type="submit">Registrar</button>
      </form>
    </>
  );
};

export default FormPokemonFav;
