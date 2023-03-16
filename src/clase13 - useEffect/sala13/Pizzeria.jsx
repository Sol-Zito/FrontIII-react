import axios from "axios";
import React, { useEffect, useState } from "react";

const Pizzeria = () => {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaE, setPizza] = useState({});
  const [eleccion, setEleccion] = useState(false);
  

  useEffect(() => {
    const productos = axios.get("http://localhost:5000/pizzas");
    productos
      .then((res) => setPizzas(res.data))
      .catch((err) => console.log(err));

    setTimeout(() => {
      
    }, 2000);
  }, [eleccion]);

  const pizzaElegida = (el) => {
    const productoSeleccionado = axios.get(
      `http://localhost:5000/pizzas/${el}`
    );
    productoSeleccionado
      .then((res) => setPizza(res.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pizzaSeleccionada = e.target.pizza.value;
    pizzaElegida(pizzaSeleccionada);
    setEleccion(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Bienvenido realize su pedido</h1>
        <select
          style={{
            width: "350px",
            height: "40px",
            fontSize: "0.9rem",
          }}
          name="pizza"
        >
          <option value="#" default>
            Seleccionar pizza:
          </option>
          {pizzas.map((pizza) => (
            <option value={pizza.id} key={pizza.id}>
              {pizza.name}
            </option>
          ))}
        </select>
        <button type="submit">Enviar</button>
      </form>
      {eleccion && <h1>Eligio la pizza {pizzaE.name}</h1>}

      {tiempo ? <h1>el pedido fue cancelado</h1> : ""}
    </>
  );
};

export default Pizzeria;
