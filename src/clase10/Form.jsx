import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    rol: "",
  });

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailIsValid = user.email.includes("@");
    const passwordIsValid = user.password.length > 3;

    // if de rechazo
    if (!emailIsValid || !passwordIsValid) {
      setError(true);
      if (!emailIsValid && !passwordIsValid) {
        setErrorMsg("Ni el email ni el password son validos");
      }
      if (!emailIsValid) {
        setErrorMsg("El email no es valido");
      } else {
        setErrorMsg("El password no es valido");
      }
    }
    setIsLogged(true);
    // envio
    console.log("data", user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Ingrese email"
          onChange={(e) => handleChange(e)}
        />
        {error && errorMsg.includes("El email no es valido") && (
          <span style={{ color: "red", fontSize: "1.7rem" }}>{errorMsg}</span>
        )}

        <input
          type="text"
          name="password"
          placeholder="Ingrese password"
          onChange={(e) => handleChange(e)}
        />
        {error && errorMsg.includes("El password no es valido") && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>{errorMsg}</span>
        )}
        <select
          style={{
            width: "100%",
            height: "30px",
            fontSize: "0.rem",
          }}
          name="rol"
          onChange={(e) => handleChange(e)}
        >
          <option value="#" defaultValue="defaul">
            Select option
          </option>
          <option value="comprador">comprador</option>
          <option value="vendedor">vendedor</option>
        </select>
        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>
      </form>

      {isLogged && <Card user={user} />}
    </div>
  );
};

export default Form;
