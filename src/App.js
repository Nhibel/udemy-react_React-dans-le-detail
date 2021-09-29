import "./App.css";
import { useState, useEffect } from "react";
import Timer from "./Timer";

function App() {
  const [toggle, setToggle] = useState(true);

  const toggleFunc = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <button onClick={toggleFunc}>Toggle</button>
      <h1>{toggle && <Timer />}</h1>
    </div>
  );
}

export default App;
