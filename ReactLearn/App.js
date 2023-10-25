import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Hoc from "./Components/hoc/hoc";

//React ELEMENT
const heading = <h3>I am an element</h3>;

//React Component
const HeadingComponent = () => {
  return <h3>I am a Component</h3>;
};

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


      {language === "react" ? (
        <div className="react">
          <div className="react-element code-container">
            <h2>React element</h2>
            <div className="code">
              <pre>
                <code>{` const heading = (<h3>I am an element</h3>);`}</code>
              </pre>
            </div>
            {heading}
            <p>
              All the elements are rendered like <code>{` {heading}`}</code>
            </p>
          </div>

          <div className="react-component code-container">
            <h2>React Component</h2>
            <div className="code">
              <pre>
                <code>
                  {`const HeadingComponent = () => {
                return <h3>I am a Component</h3>
              }`}
                </code>
              </pre>
            </div>
            <HeadingComponent />
            <p>
              All the components are rendered like{" "}
              <code>{`  <HeadingComponent />`}</code>
            </p>

            <p>
              <b>Component composition</b> : composing 2 components in one
              component{" "}
            </p>
          </div>

          <div className="code-container">
            <h2>Others</h2>
            <Hoc />
          </div>
        </div>
      ) : (
        <div className="javascript">
          <h1>Javascript</h1>
        </div>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
