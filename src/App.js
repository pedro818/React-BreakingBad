import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div` 
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

const Boton = styled.button `
    background: -webkit-linear-gradient( top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2 rem;
    border: 2px solid black;
    transition: background-size .8s ease;

    :hover {
      cursor: pointer;
      background-size: 400px;
    }


`;

function App() {
  
  // state de frases
  const [frase, guardarFrase] = useState({});

  const consultaAPI = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0]);
  }
  
  // Cargar una frase automaticamente antes de que la persona presione el boton 
 useEffect( () => {
      consultaAPI()
  },[]); 



  return (
  <Contenedor>
  <Frase
   frase={frase}
  
  />
  <Boton
  onClick={consultaAPI}
  >
        Obtener Frase
  </Boton>
  </Contenedor>
  );
}

export default App;
