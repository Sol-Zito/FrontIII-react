import React, { useState } from "react";

const colores = ["crimson", "yellow", "blue", "green"];
const talles = [36, 37, 38, 39];

const Select = () => {
  const [color, setColor] = useState("");
  const [talle, setTalle] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();

    const data = {
        name: "nike",
        price: 200,
        quantity: 1,
        color,
        talle
    }

    console.log(data);
  }

  return (
    <>
      <form onChange={handleSubmit}>
        <select
          style={{
            width: "350px",
            height: "40px",
            fontSize: "0.9rem",
          }}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="#" default>
            Seleccionar color:
          </option>
          {colores.map((color) => (
            <option value={color} key={color}>
              {color}
            </option>
          ))}
        </select>

        <select
          style={{
            width: "350px",
            height: "40px",
            fontSize: "0.9rem",
          }}
          value={talle}
          onChange={(e) => setTalle(e.target.value)}
        >
          <option value="#" default>
            Seleccionar talle:
          </option>
          {talles.map((talle) => (
            <option value={talle} key={talle}>
              {talle}
            </option>
          ))}
        </select>

        <button type="submit">Comprar</button>
      </form>

      <div
        style={{
          width: "500px",
          height: "400px",
          marginTop: "10px",
          backgroundColor: color,
          border: "2px solid",
        }}
      >
        <h2>El talle es: {talle}</h2>
      </div>
    </>
  );
};

export default Select;
