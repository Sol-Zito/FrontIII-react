import React, { useState } from "react";

const Rejuvenecedor = () => {

  const [data, setData] = useState({
    userName: '',
    age: ''
  })


  const validationName = (name) => {
    const nameWithoutSpace = name.trim();
    if (nameWithoutSpace.length > 1) {
      return true;
    } else {
      return false;
    }
  };

  const validationAge = (age) => {
    if (age > 0) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const nameValue = e.target.name.value;
    const ageValue = e.target.age.value;
    
    const isNameValid = validationName(nameValue);
    const isAgeValid = validationAge(ageValue);
    if (isNameValid && isAgeValid) {
      const descAge = ageValue - 10;
      alert(`Hola ${nameValue}, tu nueva y feliz edad es ${descAge}`);
    } else {
      alert("Algun dato no es valido");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          type='number'
          placeholder="Ingrese edad"
          name="age"
          onChange={(e) => setData({...data, userName: e.target.value})}
        />
        <input
          type="text"
          placeholder="Ingrese nombre"
          name="name"
          onChange={ (e) => setData({...data, age: e.target.value}) }
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Rejuvenecedor;
