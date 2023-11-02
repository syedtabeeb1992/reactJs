import React from "react";
import Hoc from "../hoc/hoc";
import Playground from "./Playground";
//React ELEMENT
const heading = <h3>I am an element</h3>;

//React Component
const HeadingComponent = () => {
  return <h3>I am a Component</h3>;
};

const ReactMain = () => {
  return (
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
          <b>Component composition</b> : composing 2 components in one component{" "}
        </p>
      </div>

      <div className="code-container">
        <h2>Others</h2>
        <Hoc />
      </div>
      
      <div className="code-container">
        <h2>Playground</h2>
        <Playground />
      </div>
    </div>
  );
};

export default ReactMain;
