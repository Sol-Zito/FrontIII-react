import React from "react";

const ItemCard = ({ product, addToCart }) => {
  return (
    <div style={{ border: "2px solid white" }}>
      <h2>{product.name}</h2>
      <p>Categoria: {product.category}</p>
      <h4>Stock: {product.stock}</h4>
      <img src={product.img} alt={product.name}/>
      <h3>${product.price}</h3>
      <p>{product.description}</p>
      <button onClick={() => {addToCart(product)}}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCard;
