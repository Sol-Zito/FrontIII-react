import React from "react";
import StatusTripulante from "./StatusTripulante";

const tripulantes = [
  { id: 0, nombre: "Mr. Poindibags", esImpostor: false },
  { id: 1, nombre: "Bombom", esImpostor: false },
  { id: 2, nombre: "Tito", esImpostor: false },
  { id: 3, nombre: "X-Ray", esImpostor: true },
  { id: 4, nombre: "Fixfox", esImpostor: false },
];

const Tripulantes1 = () => {
  let tripulacion = tripulantes.map((tripulante) => (
    <StatusTripulante key={tripulante.id} {...tripulante} />
  ));

  const lista = <ol>{tripulacion}</ol>;

  return <div>{lista}</div>;
};

export default Tripulantes1;
