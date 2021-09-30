import "./App.css";
import { useState, useEffect, useRef } from "react";
import Content from "./Content";

function App() {
  const [toggle, setToggle] = useState([1, 2, 3]);

  const toggleFunc = () => {
    // Ne jamais modifier le state directement, il faut créer un nouvel objet qu'on lui assignera ensuite
    const newToggle = [...toggle];
    newToggle.push(newToggle[newToggle.length - 1] + 1);
    setToggle(newToggle);
  };

  return (
    <div className="App">
      <Content>
        <h1>Titre de mon article 1</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Content>
      <Content>
        <h1>Titre de mon article 2</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Content>
      <Content>
        <h1>Titre de mon article 3</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </Content>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
