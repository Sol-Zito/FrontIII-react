import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const emailIsValid = (email) =>{
    const validEmail = email.trim()
    if (validEmail.length > 10) {
        return true;
    }else{
        return false;
    }

  }

  const passwordIsValid = (password) =>{
    const validPassword = password.trim()
    if (validPassword.length > 8) {
        return true;
    }else{
        return false;
    }
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.mail.value;
    const password = e.target.password.value;
    
    if (emailIsValid(name) && passwordIsValid(password)) {
        alert(`Hola ${name}, tu correo es: ${email}`);
    }else{
        alert('Alguno de los datos no son validos')
    }

  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input type="text" name="name" onChange={(e) => setData({ ...data, name: e.target.value })}/>
        <input type="text" name="mail" onChange={(e) => setData({ ...data, email: e.target.value })}/>
        <input
          type="password"
          name="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;
