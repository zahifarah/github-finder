import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
   state = {
      users: [],
      loading: false,
   };

   // Search Github users
   searchUsers = async (text) => {
      this.setState({ loading: true });
      const res = await axios.get(
         `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_TOKEN}`
      );
      this.setState({ users: res.data.items, loading: false });
   };

   // Clear users from state
   clearUsers = () => this.setState({ users: [], loading: false });

   render() {
      const { users, loading } = this.state;
      return (
         <div className="App">
            <Navbar />
            <div className="container">
               {/* assign "this.searchUsers" return value (text in this case) 
               to be passed in to searchUsers method in App.js */}
               <Search
                  searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers}
                  showClear={users.length > 0 ? true : false}
               />
               <Users loading={loading} users={users} />
            </div>
         </div>
      );
   }
}

export default App;
