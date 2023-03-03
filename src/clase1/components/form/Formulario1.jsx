import React from 'react'

const Formulario1 = () => {
  return (
    <div >
      <h2>Estoy en el form</h2>
      <form style={{display: 'flex', flexDirection: 'row',  gap: '5px'}}>
        <input name='name' placeholder='Ingrese su nombre'></input>

        <input name='email' placeholder='Ingrese su email'></input>

        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Formulario1;
