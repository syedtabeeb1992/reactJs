import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

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
        <Header />
        <Outlet />
      </div>
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
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
