import React from "react";

const Card = ({ email, rol }) => {
  return (
    <div>
      <h2>Hola tu email : {email} </h2>
      <h2>Hola tu rol : {rol} </h2>
    </div>
  );
};

export default Card;
