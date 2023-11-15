import React from 'react';
import {useRouteError} from "react-router-dom";

const Error = () => {


    console.log(useRouteError());
// console.log(useRouteMatch())
  // Now you can access the route information from the match object

  return (
    <div>Error

        <h1>{useRouteError().status + useRouteError().statusText}</h1>
    </div>
  );
};

export default Error;
