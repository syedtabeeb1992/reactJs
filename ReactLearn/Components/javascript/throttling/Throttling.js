import React, { useEffect } from "react";

const Throttling = () => {
  let throttleTimeout;

  const throttle = (callback, delay) => {
    if (!throttleTimeout) {
      callback();

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
      }, delay);
    }
  };

  const expensiveFunction = () => {
    throttle(() => {
      console.log("expensive func");
    }, 2000);
  };

  useEffect(() => {
    window.addEventListener("scroll", expensiveFunction);
  }, []);

  return (
    <div>
      <h1>Throttling</h1>
      <p>
        Throttling is a technique used to control the rate at which a function
        is executed. It ensures that the function is not called more often than
        a specified delay, even if the triggering event (like scrolling,
        resizing, or typing) occurs more frequently. This can be beneficial for
        performance optimization and to prevent excessive resource usage.
      </p>

      <button onClick={expensiveFunction}></button>
    </div>
  );
};

export default Throttling;
