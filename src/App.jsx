import { useEffect } from "react";
import "./styles/scss/index.scss";

//Services
import axios from './utils/axios.config.js';



//Components
import Ui from './components/container/ui.jsx';

function App() {
  const productsLink = 'https://fakestoreapi.com/products';

  
  useEffect( () =>{
   
  });

  const toggleModeStyle = () => {
    let container = document.getElementById("toggleButton");
    container.classList.toggle('dark');
  }

  return (
    <div className="app" id="toggleButton">
      <div>
        <h1> Hola React </h1>
        <button className="btn btn-primary" onClick={toggleModeStyle}>Toggle</button>
      </div>
      <Ui></Ui>
    </div>
  );
}

export default App;
