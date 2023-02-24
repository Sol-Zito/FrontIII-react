import React from "react";
const PokemonCard = ({ name, powerLevel, agressive, avatar, type }) => {
  
  const tipoColor = {
    water : "blue",
    fire: "red",
    air : "gray",
    electric: "yellow"
  }

  return (
    <>
      <div style={ {backgroundColor: tipoColor[type]} }>
        <h1>{name}</h1>
        <h2>Power Level: {powerLevel}</h2>
        <h2> {agressive ? "es agresivo" : "no es agresivo"}</h2>
        <img src={avatar} alt={name} style={{ padding: 20, maxWidth: 500 }} />
      </div>
    </>
  );
};

export default PokemonCard;