import { useEffect, useState } from "react";
import logo from "./assets/svg/react.svg";
import landScape from './assets/images/landscape.jpeg';
import "./styles/scss/index.scss";

//Services
import axios from './utils/axios.config.js';

//Mocks
import user from './assets/mocks/user.json'; 

//Components
import Button from './components/pure/button.jsx';

function App() {
  const productsLink = 'https://fakestoreapi.com/products';
  const configButtonXs = {
    data: 'Toggle',
    color: '#111',
    border: '1px solid #111',
    borderRadius: '6px',
    icon: logo,
    backgroundColor: 'transparent'
  };
  const configButtonMOrange = {
    data: 'Pepe',
    color: 'orange',
    border: '1px solid orange',
    borderRadius: '6px',
    icon: "",
    backgroundColor: 'transparent',
  }
  
  useEffect( () =>{
   
  });

  const toggleModeStyle = () => {
    let container = document.getElementById("toggleButton");
    container.classList.toggle('dark');
  }

  return (
    <div className="app" id="toggleButton">
      {/* <p>{userMocking ? userMocking.name : ""}</p> */}
      <div>
        <h1>
          Hola React 
          <img src={logo} width="25" alt="react logo" />
        </h1>
        <button onClick={toggleModeStyle}>Toggle</button>
      </div>
      
      <img src={landScape}  height="200px" alt="" />
      <Button props={configButtonXs}></Button>
      <Button props={configButtonMOrange}></Button>
    </div>
  );
}

export default App;
