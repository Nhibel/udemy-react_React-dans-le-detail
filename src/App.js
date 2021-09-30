import "./App.css";
import { useState, useEffect, useRef } from "react";
import Video from "./video.mp4";

function App() {
  const [toggle, setToggle] = useState(true);

  const toggleFunc = () => {
    setToggle(!toggle);
  };

  // useRef permet de sélectionner une réf (ici la vidéo)
  const ref = useRef();

  // useEffect se "déclenche" après le chargement du DOM, permet ensuite de contrôler la vidéo
  useEffect(() => {
    setTimeout(() => {
      ref.current.pause();
    }, 1500);
  }, []);

  return (
    <div className="App">
      <video ref={ref} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
