import React from "react";

const Debouncing = () => {
    let timer;
  const deboucne = (func, delay) => {


    return () => {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  };

  const clicked = deboucne(() => {
    console.log("DEBOUNCE");
  }, 500);
  return (
    <div>
      <h1>Debouncing</h1>

      <button onClick={clicked}>Debounce</button>
    </div>
  );
};

export default Debouncing;
