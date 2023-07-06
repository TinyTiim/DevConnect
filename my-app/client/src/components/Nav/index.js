import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faComments, faBullhorn } from '@fortawesome/free-solid-svg-icons';


function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="flex-row">
          <FontAwesomeIcon icon={faHouse}  className="fa-bounce" size="4x" color="blue" />
          <h2 className="mx-1">
            
            <Link to="/">Home</Link>
          </h2>
          <FontAwesomeIcon icon={faUser} className="fa-bounce" size="4x" color="blue" />
          <h2 className="mx-1">
            
            <Link to="/profile">Profile</Link>
          </h2>
          <FontAwesomeIcon icon={faComments}  className="fa-bounce" size="4x" color="blue" />
          <h2 className="mx-1">
          
            <Link to="/chats">Chat</Link>
          </h2>
          <FontAwesomeIcon icon={faBullhorn} className="fa-bounce"  size="4x" color="blue"/>
          <h2 className="mx-1">
          
            <Link to="/community">Community</Link>
          </h2>
        </div>
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
