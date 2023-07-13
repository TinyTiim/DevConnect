import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faComments, faBullhorn } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  //Renders navbar based on user auth
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="navbar">
          <li className="navbar-item">
            <FontAwesomeIcon icon={faHouse} className="fa-bounce" size="2x" color="blue" />
            <span className="navbar-item-text">
              <Link to="/">Home</Link>
            </span>
          </li>
          <li className="navbar-item">
            <FontAwesomeIcon icon={faUser} className="fa-bounce" size="2x" color="blue" />
            <span className="navbar-item-text">
              <Link to="/profile">Profile</Link>
            </span>
          </li>
          <li className="navbar-item">
            <FontAwesomeIcon icon={faComments} className="fa-bounce" size="2x" color="blue" />
            <span className="navbar-item-text">
              <Link to="/chats">Chat</Link>
            </span>
          </li>
          <li className="navbar-item">
            <FontAwesomeIcon icon={faBullhorn} className="fa-bounce" size="2x" color="blue" />
            <span className="navbar-item-text">
              <Link to="/community">Coming soon. . .</Link>
            </span>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="navbar">
          <h2 className="navbar-item">
            <FontAwesomeIcon icon={faHouse} className="fa-bounce" size="4x" color="blue" />
            <span className="navbar-item-text">
              <Link to="/">Home</Link>
            </span>
          </h2>
          <h2 className="navbar-item">
            <FontAwesomeIcon icon={faUser} className="fa-bounce" size="4x" color="blue" />
            <span className="navbar-item-text">
              <Link to="/profile">Profile</Link>
            </span>
          </h2>
          <h2 className="navbar-item">
            <FontAwesomeIcon icon={faComments} className="fa-bounce" size="4x" color="blue" />
            <span className="navbar-item-text">
              <Link to="/chats">Chat</Link>
            </span>
          </h2>
          <h2 className="navbar-item">
            <FontAwesomeIcon icon={faBullhorn} className="fa-bounce" size="4x" color="blue" />
            <span className="navbar-item-text">
              <Link to="/community">Coming soon</Link>
            </span>
          </h2>
        </div>
      );
      
    }
  }



  return (
    <div className="container">
      {showNavigation()}
    </div>
  );
}
//Exports navbar
export default Nav;
