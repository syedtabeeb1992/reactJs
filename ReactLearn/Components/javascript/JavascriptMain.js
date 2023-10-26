import React from "react";
import Closures from "./closures/Closures";
import EventLoop from "./eventloop/EventLoop";
import Promises from "./promise/Promises";
import Hoisting from "./hoisting/Hoisting";

const JavascriptMain = () => {
  return (
    <div className="code-container">
      <Closures />
      <EventLoop />
      <Promises />
      <Hoisting />
    </div>
  );
};

export default JavascriptMain;
