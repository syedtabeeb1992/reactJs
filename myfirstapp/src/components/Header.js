import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constants';

export const Header = () => {

  const [isLogin, setisLogin] = useState()
const clicked = ()=>{
  setisLogin(!isLogin)
}

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
          />
        </div>
  
        <div className="navitems">
          <ul>
            <li>Homes</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Carts</li>
            <li> <button onClick={clicked}> {isLogin ?"lougout":"login"} </button> </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header