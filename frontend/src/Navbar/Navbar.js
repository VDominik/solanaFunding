import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Footer/textBlack.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          Hamburger 
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            {/* <li>
              <NavLink to="/">Home</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/blog">Blog</NavLink>
            </li> */}
            <li>
              <NavLink to="/app">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li className="campaign-button">
              <NavLink className={"create"} to="/create">
                Create a Campaign
              </NavLink>
            </li>
            <li>
                {/* <div className="search-button"> */}
                  <NavLink to="/app">Search</NavLink>
                {/* </div> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
