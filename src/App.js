import "./App.css";
import { useState, useEffect, useRef, useMemo } from "react";
import Content from "./Content";

function App() {
  const [toggle, setToggle] = useState([1, 2, 3]);

  const toggleFunc = () => {
    // Ne jamais modifier le state directement, il faut créer un nouvel objet qu'on lui assignera ensuite
    const newToggle = [...toggle];
    newToggle.push(newToggle[newToggle.length - 1] + 1);
    setToggle(newToggle);
  };

  const tableau = useMemo(() => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }, []);

  return (
    <div className="App">
      <Content num={tableau} />
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
