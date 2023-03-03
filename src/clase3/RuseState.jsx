import React, { useState } from "react";
import Home from "./Home";
import "./style.css";

const RuseState = () => {
  const [count, setCount] = useState(0);
  const [tipoColor, setTipoColor] = useState("light");

  const modoClaro = () => {
    setTipoColor("light");
  };

  const modoDark = () => {
    setTipoColor("dark");
  };

  return (
    <>
      <Home tipoColor={tipoColor} />
      <button onClick={modoDark}>Modo oscuro</button>
      <button
        onClick={() => {
          modoClaro();
        }}
      >
        Modo claro
      </button>
      <div className="card">
        <div style={{ color: "GrayText", fontWeight: "bold" }}>
          count: {count}
        </div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  );
};

export default RuseState;
