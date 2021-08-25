import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
   return (
      <nav className="navbar bg-primary">
         <h1>
            <i className={icon} /> {title}
         </h1>
      </nav>
   );
};

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

export default Navbar;
