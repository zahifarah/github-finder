import React from "react";

class User extends React.Component {
   componentDidMount() {
      this.props.getUser(this.props.match.params.username); // grab param of login from App.js
   }

   render() {
      return <div>User</div>;
   }
}

export default User;
