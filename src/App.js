import "./App.css";
import { useState, useEffect, useRef } from "react";
import Video from "./video.mp4";

function App() {
  const [toggle, setToggle] = useState(true);

  const toggleFunc = () => {
    setToggle(!toggle);
  };

  // useRef permet de sélectionner une réf (ici la vidéo)
  // On le set avec un tableau vide
  const ref = useRef([]);

  // On fait référence à addToRef depuis le DOM
  // Permet d'ajouter les multiples références dans un tableau
  const addToRef = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  // useEffect se "déclenche" après le chargement du DOM, permet ensuite de contrôler la vidéo
  useEffect(() => {
    // On lance une action lors d'un resize
    window.addEventListener("resize", actionResize);

    function actionResize() {
      console.log("Resized");
    }

    // On clean lors de la destruction du useEffect (changement de page par exemple)
    return () => {
      window.removeEventListener("resize", actionResize);
    };
  }, []);

  return (
    <div className="App">
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
