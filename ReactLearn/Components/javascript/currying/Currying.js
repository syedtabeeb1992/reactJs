import React from "react";

const Currying = () => {
  return (
    <div>
      <h1>Currying</h1>
      <p>
        a function is transformed into a sequence of functions, each taking a
        single argument. Instead of passing all the arguments to a function at
        once, you pass one argument at a time, and it returns a new function
        that expects the next argument until all the arguments are provided.
      </p>

      <div className="code">
        <pre>
          <code>
            {` 
     const sum = (a)=>{
        return function (b) {
            return  function(c){
               return a+b+c
            } 
        }
    }
    
    console.log("hiid", sum(1)(9)(5));
              
              `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Currying;
