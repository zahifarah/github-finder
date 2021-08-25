import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
   return (
      <div className="card text-center">
         <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: "110px" }}
         />
         <h3>{login}</h3>
         <div>
            <a href={html_url} className="btn btn-dark btn-md my-1">
               More
            </a>
         </div>
      </div>
   );
};

// type-checking
UserItem.propTypes = {
   user: PropTypes.object.isRequired,
};

export default UserItem;
