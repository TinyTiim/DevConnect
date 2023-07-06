import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          
          <li className="mx-1">
            <Link to="/">Home</Link>
          </li>
        
          <li className="mx-1">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="mx-1">
            <Link to="/chats">Chat</Link>
          </li>
          <li className="mx-1">
            <Link to="/community">Community</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <div className="container">
      <aside className="sidebar">{showNavigation()}</aside>
      
  </div>
  );
}

export default Nav;
