import React from 'react'
import { LOGO_URL } from '../utils/constants';

export const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header