import React from "react";

// PLAY GROUND


const makeAdder = (x) => {

  return (y) => {

      return (z) =>{
        return x+y+z
      }
        
  };
};

console.log(makeAdder(100)(100)(99));

// const x = (b) => {
//   console.log("AAA", b);

//   for (var i = 1; i <= 5; i++) {
//     console.log("DDD", i);
//     return (i) => {
//       setTimeout(() => {
//         console.log("NEW", i);
//       }, 1);
//     };
//   }
// };

// const sdfsd = x();

// sdfsd(1);
// const x = () => {
//   console.log("AAA");

//   for (let i = 1; i <= 5; i++) {
//     console.log("DDD", i);
//     (function (i) {
//       setTimeout(() => {
//         console.log("NEW", i);
//       }, 1);
//     })(i);
//   }
// };

// const createbase = (x) => {
//   return (y) => {
//     return x + y;
//   };
// };

// var addsix = createbase(6);
// console.log(addsix(1));
// console.log(addsix(100));

// const makeAdder = (x) => {
//   return (y) => {
//     return (z) => {
//       return x + y + z;
//     };
//   };
// };

// console.log(makeAdder(100)(100)(1000));

// PLAY GROUND

const Closures = () => {
  let name = "Arjunss";
  const outerFunc = () => {
    name ="BOOBISE"
    return () => {
      console.log(name);
    };
  };

  const closureFunc = outerFunc();

  closureFunc();

  return (
    <div className="code-container">
      <h1>Closures</h1>
      <p>
        closure is the combination of a function bundled together (enclosed)
        with references to its surrounding state (the lexical environment). In
        other words, a closure gives you access to an outer function's scope
        from an inner function
      </p>

      <div className="code">
        <pre>
          <code>
            {` 
           const init = () => {
            const name = "Mozilla"; // name is a local variable created by init
            const displayName = () => {
              // displayName() is the inner function, that forms the closure
              console.log(name); // use variable declared in the parent function
            };
            displayName();
          };
          
          init();
              
              `}
          </code>
        </pre>
      </div>
      <button onClick={closureFunc}>Run Closure</button>
    </div>
  );
};

export default Closures;
