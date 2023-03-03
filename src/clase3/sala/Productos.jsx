import React from 'react'
import ListProductos from './ListProductos';

const productos = [
    {
      nombre: "Macbook Air 13 Chip M1 256gb",
      image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
      precio: "R$ 7999.00",
    },
    {
      nombre: "Echo Dot (4ª Geração)",
      image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
      precio: "R$ 379.00",
    },
    {
      nombre: "Câmera Ip Sem Fio 360°",
      image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
      precio: "R$ 199.00",
    },
    {
      nombre: "Fechadura Eletrônica Digital Inteligente Zigbee",
      image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
      precio: "R$ 1599.00",
    },
  ];

const Productos = () => {

  return (
    <>
      <h1>Productos</h1>
      <ul style={{listStyle: 'none'}}>
        {productos.map( (elemento) => {
        return (
        <ListProductos key={elemento.nombre} {...elemento} ></ListProductos>
        )}

        
        )}
      </ul>
    </>
  )
}

export default Productos
