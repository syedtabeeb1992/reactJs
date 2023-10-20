import React from "react";
import ReactDOM from "react-dom/client";

//React ELEMENT
const heading = <h3>I am an element</h3>;

//React Component
const HeadingComponent = () => {
  return <h3>I am a Component</h3>;
};

const App = () => {
  return (
    <div>
      <div className="">
        <h1>My First App</h1>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
