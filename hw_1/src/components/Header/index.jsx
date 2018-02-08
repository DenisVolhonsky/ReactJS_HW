import React from 'react';
import './style.css';

class Header extends React.Component {
   render() {
       return (
           <div className="Header">
               <h1 className="Header--logo">Home Cinema</h1>
               <ul className="Navbar">
                   <li className="Navbar-list"><a href="http://www.google.com">About</a></li>
                   <li className="Navbar-list"><a href="http://www.google.com">Browse</a></li>
                   <li className="Navbar-list"><a href="http://www.google.com">Login</a></li>
               </ul>
           </div>
       );
   }
}

export default Header;
