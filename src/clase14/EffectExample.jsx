import React, { useEffect, useState } from "react";

export default function EffectExample() {
  const [vetor, setVetor] = useState([]);
  
  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments");
    const convert = await data.json();
    setVetor(convert);
  };
  
  useEffect(() => {
      getData();
      console.log("vetor", vetor);
  }, []);

  return (
    <div>
      <ol>
        {vetor.map((object) => (
          <li key={object.id} >{object.email}</li>
        ))}
      </ol>
    </div>
  );
}
