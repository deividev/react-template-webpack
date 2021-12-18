import { useEffect, useState } from "react";
import logo from "./assets/react.svg";
import "./App.css";
import "./styles/scss/index.scss";

//Services
import axios from './utils/axios.config.js';

//Mocks
import {getObservable} from './services/Http.service.js'; 

function App() {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  const productsLink = 'https://fakestoreapi.com/products';
  
  useEffect( () =>{
    getProductList();
    setUser(getObservable(productsLink));
  });

  const getProductList = () => {
    
          axios.get(productsLink).subscribe(
              res => {
                  setProducts(res.data);
              },
              error => console.log(error),
              () => console.log('success')
          ).unsubscribe();
  }
  return (
    <div className="app">
      {/* <p>{userMocking ? userMocking.name : ""}</p> */}
      <p>{user.name}</p>
      <h1>
        Hola React 
        <img src={logo} width="25" alt="react logo" />
      </h1>
      <div>
        <label htmlFor="name">Nombre: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
