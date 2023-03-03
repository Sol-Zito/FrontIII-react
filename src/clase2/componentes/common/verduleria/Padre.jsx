import React, { createElement } from "react";
import Hijo from "./Hijo";

const frutas = ["anana", "banana", "manzana", "pera"];
const titulo = "Verduleria pepito";

const Padre = () => {
  const hijos = frutas.map((fruta, index) => (
    <Hijo key={fruta} fruta={fruta} />
  ));

  console.log("hijos", hijos);

  return (
    <>
      <h1>{titulo}</h1>
      <ul>{hijos}</ul>
    </>
  );
};

export default Padre;
