import React, { useState } from "react";
import ReactDOM from "react-dom";
import JavascriptMain from "./Components/javascript/JavascriptMain";
import ReactMain from "./Components/react/ReactMain";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  const [language, setLanguage] = useState("all");

  const reactClicked = () => {
    setLanguage("react");
  };

  const javascriptClicked = () => {
    setLanguage("javascript");
  };

  const all = () => {
    setLanguage("all");
  };

  return (
    <div>

    
<div className="">
        <button onClick={reactClicked}>React</button>
        <button onClick={javascriptClicked}>JavaScript</button>
        <button onClick={all}>All</button>
      </div>
      {
        language === "react" ? (
          // Your React-specific content here
          <ReactMain />
        ) : language === "javascript" ? (
          <JavascriptMain />
        ) : (
          <div>
            <ReactMain />
            <JavascriptMain />
          </div>
        )
      } 
    </div>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path:"/"
//   }
// ])

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
