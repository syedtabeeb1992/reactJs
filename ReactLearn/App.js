import React, { useState } from "react";
import ReactDOM from "react-dom";
import JavascriptMain from "./Components/javascript/JavascriptMain";
import ReactMain from "./Components/react/ReactMain";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./Components/Body";

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

      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/js",
        element: <JavascriptMain />,
      },

      {
        path: "/js",
        element: <JavascriptMain />,
      },
      {
        path: "/react",
        element: <ReactMain />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
