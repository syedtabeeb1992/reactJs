import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Hoc from "./Components/hoc/hoc";
import Closures from "./Components/javascript/closures/Closures";
import JavascriptMain from "./Components/javascript/JavascriptMain";
import ReactMain from "./Components/react/ReactMain";

const App = () => {
  const [language, setlanguage] = useState("all");

  const reactclicked = () => {
    setlanguage("react");
  };

  const javascriptclicked = () => {
    setlanguage("javascript");
  };

  const all = () => {
    setlanguage("all");
  };

  return (
    <div>
      <div className="">
        <button onClick={reactclicked}>React</button>
        <button onClick={javascriptclicked}>javascriptclicked</button>
        <button onClick={all}>All</button>
      </div>

      {language === "react" ? <ReactMain /> : <JavascriptMain />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
