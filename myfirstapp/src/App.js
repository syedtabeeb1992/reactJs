import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";

const App = () => {
  const [isRunning, setisRunninf] = useState(false);
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning === true) {
      timer = setInterval(() => {
        setcounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const startcounter = () => {
    setisRunninf(true);
  };

  const pausecounter = () => {
    setisRunninf(false);
  };

  const stopcounter = () => {
    setcounter(0);
    setisRunninf(true);
  };
  return (
    <div>
      <div className="">
        <button onClick={startcounter}> counter start </button>
        <button onClick={pausecounter}> pause start </button>
        <button onClick={stopcounter}> pause start </button>

        <h1>{counter}</h1>

        <Header />
        <Body />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
