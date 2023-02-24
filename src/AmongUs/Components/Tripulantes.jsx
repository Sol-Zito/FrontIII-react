//  Usando ciclo for y map 
// solo javascrip

import React from "react";

const tripulantes = [
  { nombre: "Mr. Poindibags", esImpostor: true },
  { nombre: "Bombom", esImpostor: true },
  { nombre: "Tito", esImpostor: false },
  { nombre: "X-Ray", esImpostor: false },
  { nombre: "Fixfox", esImpostor: false },
];

const Tripulantes = () => {
  //Usando el for
  // Creamos un nuevo array
  let tripulacion = [];
  // Iteramos sobre cada elemento en el array tripulantes
  for (let i = 0; i < tripulantes.length; ++i) {
    let tripulante = (
      <li key={tripulantes[i].nombre}>
        {tripulantes[i].nombre}, {tripulantes[i].esImpostor ? "" : "no"} era el
        impostor;
      </li>
    );
    // Metemos cada tripulante en el nuevo array
    tripulacion.push(tripulante);
  }

  //Usando el metodo map
  let tripulacion2 = tripulantes.map((tripulante, index) => (
    <li key={index}>
      {tripulante.nombre}, {tripulante.esImpostor ? "" : "no "} era el impostor;
    </li>
  ));

  return (
    <>
      <ol>{tripulacion2}</ol>
    </>
  );
};

export default Tripulantes;
