import React, { useState } from "react";

const formulario = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  // Creamos una funcion para validar el nombre
  const validateUserName = (userName) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = userName.trim();

    // Validamos la extension
    if (withoutSpaces.length > 2) {
      return true;
    } else {
      return false;
    }
  };

  // Creamos una funcion para validar el password
  const validatePassword = (password) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = password.trim();
    // Separamos el string en un array para luego
    // recorrelo y validar si existe al menos un numero
    const passwordAsArray = withoutSpaces.split("");
    // Some nos retorna true si al menos una de las
    // iteraciones es verdadera
    const hasNumber = passwordAsArray.some((character) => {
      // Si el valor es NaN, no es un numero
      if (isNaN(character)) {
        return false;
      } else {
        return true;
      }
    });

    // Validamos la extension y que haya al menos un numero
    if (withoutSpaces.length > 5 && hasNumber) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const isUsernameValid = validateUserName(userName);
    const isPasswordValid = validatePassword(password);
    if (!isPasswordValid || !isUsernameValid) {
      alert("Alguno de los datos ingresados no son correctos");
    } else {
      alert(`Bienvenido: ${userName}`);
    }
  };

  return (
    <div className="App">
      <h3>Iniciar Sesión</h3>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={userName}
          onChange={onChangeUserName}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default formulario;
