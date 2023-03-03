import React from "react";
import styleHome from "./Home.module.css";

const Home = ({tipoColor}) =>{

    return(

    <div >
      <h1 className={styleHome[tipoColor]}>Este es el home</h1>
    </div>
    )
 
};

export default Home;
