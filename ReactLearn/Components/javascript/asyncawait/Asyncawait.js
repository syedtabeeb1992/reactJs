import React, { useEffect, useState } from "react";

const AsyncAwaitComponent = () => {
  const [result, setResult] = useState(null);

  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hii P1");
    }, 5000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hii P2");
    }, 3000);
  });

  const handlePromis = async () => {
    try {
      console.log("HANDLE");
      const v = await p;
      console.log(v);

      console.log("HANDLE2");
      const v2 = await p2;
      console.log(v2);

      // Set the result in state to trigger a re-render
      setResult("Async operations completed");
    } catch (error) {
      console.error("Error:", error);
      setResult("Error occurred");
    }
  };

  useEffect(() => {
    console.log("After");
    handlePromis();
  }, []); // Empty dependency array means this effect runs once after the initial render




  ///Example for try catch api calling post and get
  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('GET Request Data:', data);
    } catch (error) {
      console.error('GET Request Error:', error);
    }
  }
  
  async function postData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to post data');
      }
      const data = await response.json();
      console.log('POST Request Data:', data);
    } catch (error) {
      console.error('POST Request Error:', error);
    }
  }
  
  try {
    fetchData(); // Make a GET request
    postData();  // Make a POST request
  } catch (error) {
    console.error('Error in calling functions:', error);
  }
  

  return (
    <div>
      <h1>{result}</h1>

      <h3>Error handling is done in try-catch</h3>
      <p>
        Async/await is a feature in modern JavaScript that makes it easier to
        work with asynchronous code, which is code that doesn't necessarily
        execute in a linear, step-by-step fashion.
      </p>

      <p>
        The 'async' keyword is used to define a function as asynchronous, which
        means it can pause and resume its execution while waiting for some
        non-blocking operation to complete.
      </p>

      <p>
        The 'await' keyword is used within an async function to pause its
        execution until a Promise...a special object representing an asynchronous
        operation...is resolved. Once the Promise is resolved, the function
        continues from where it was paused.
      </p>
    </div>
  );
};

export default AsyncAwaitComponent;
