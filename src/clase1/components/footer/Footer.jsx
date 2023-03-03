import React from "react";

const app = [
  { name: 'instagram', link: "url" },
  { name: 'Facebook', link: "url" },
  { name: 'WhatsApp', link: "url" },
];

const renderizar = app.map( (ele, index) =>  <li key={index}>  {ele.name}: {ele.link} </li> )

const Footer = () => {
  return (
    <>
      <h3>Contacto:</h3>
      <ul >
        {renderizar}
      </ul>
    </>
  );
};

export default Footer;
