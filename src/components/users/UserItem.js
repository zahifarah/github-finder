import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { avatar_url, login: username, html_url } }) => {
   return (
      <div className="card text-center">
         <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: "110px" }}
         />
         <h3>{username}</h3>
         <div>
            <Link to={`/user/${username}`} className="btn btn-dark btn-md my-1">
               More
            </Link>
         </div>
      </div>
   );
};

// type-checking
UserItem.propTypes = {
   user: PropTypes.object.isRequired,
};

export default UserItem;
