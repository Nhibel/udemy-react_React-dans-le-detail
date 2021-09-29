import { useState, useEffect } from "react";

function Timer() {
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 0.1);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    // Les React Fragment permettent de ne pas avoir à entourer les éléments du return par une div
    // Les anciennes versions doivent contenir un élément Fragment dans l'import react et on remplace <> ... </> par <Fragment> ... </Fragment>
    <>
      <h2>{timer}</h2>
    </>
  );
}

export default Timer;
