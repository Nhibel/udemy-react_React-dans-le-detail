import "./App.css";
import { useState, useEffect, useRef } from "react";
import Video from "./video.mp4";

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
      <h1>{toggle}</h1>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
