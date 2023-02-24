import React from "react";

const StatusTripulante = ({ nombre, esImpostor }) => {
  return (
    <li>
      {nombre} {esImpostor ? "" : "no"} era el impostor;
    </li>
  );
};

export default StatusTripulante;
