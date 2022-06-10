import React from 'react';
import './App.css';
import Boton from './components/boton.jsx';
import Contador from './components/Contador'

import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(numClics - numClics)
  };
  return (
    <div className='App'>
      <div className='titulo-contenedor'>
        <h1 className='titulo'>Contador de Clics</h1>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}
        />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto={'Reiniciar'}
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
        <h2>Santiago Hollmann</h2>
      </div>
    </div>
  );
}

export default App;
