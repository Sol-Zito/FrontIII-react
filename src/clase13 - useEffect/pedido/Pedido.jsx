import React, { useEffect, useState } from "react";

const Pedido = () => {
  const [pedido, setPedido] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPedido("pizzas");
      console.log("el pedido se realizo");
    }, 2000);
  }, []);
  
  return (
    <div>
      <h1>Su pedido</h1>
      <ul>{pedido.length > 0 ? <li>{pedido}</li> : ""}</ul>
      <button onClick={() => setPedido(false)}>cancelar pedido</button>
      {!pedido && console.log("su pedido fue cancelado")}
    </div>
  );
};

export default Pedido;
