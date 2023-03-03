import React from "react";
import StyleList from "./ListProductos.module.css";

const ListProductos = ({ nombre, image, precio }) => {
  return (
    <li className={StyleList.title}>
      <h2>{nombre}</h2>
      <img src={image} />
      <h3>{precio}</h3>
    </li>
  );
};

export default ListProductos;
