import { useEffect, useState } from "react";

const Saludo = () => {
 
  const [nombre, setNombre] = useState("");
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    console.log("me ejecuto en el effect");
  }, [count]);

  return (
    <>
        <h1>{nombre}</h1>

        <form >
            <input onChange={(e) => setNombre(e)}/>
            <button type="submit">Nombre</button>
        </form>

      <div>count is {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      
    </>
  );
}

export default Saludo;
