import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// type-checking
Navbar.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired,
};

// defaults to this
Navbar.defaultProps = {
   title: "Github Finder",
   icon: "fab fa-github",
};

const Navbar = ({ icon, title }) => {
   return (
      <nav className="navbar bg-primary">
         <h1>
            <i className={icon} /> {title}
         </h1>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/about">Home</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
