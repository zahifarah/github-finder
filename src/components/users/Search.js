import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
   state = {
      text: "",
   };

   static propTypes = {
      searchUsers: PropTypes.func.isRequired,
      clearUsers: PropTypes.func.isRequired,
      showClear: PropTypes.bool.isRequired,
      setAlert: PropTypes.func.isRequired,
   };

   // "e.target.name" in brackets to pass it as a key, returns "text" in this case
   // assign "text" whatever is returned from "e.target.value"
   // which is whatever is typed in the search bar,
   // constantly assigned and rendered by state via {this.state.text}

   // we're basically writing:    ({  returns "text":   typed value });
   onChange = (e) =>
      this.setState({ [e.target.name]: e.target.value });

   onSubmit(e) {
      e.preventDefault();
      if (this.state.text === "") {
         this.props.setAlert("Please enter something.", "light");
      } else {
         // create props function called searchUsers(), passing in the text entered in search bar.
         this.props.searchUsers(this.state.text);
         this.setState({ text: "" });
      }
   }

   render() {
      const { showClear, clearUsers } = this.props;
      return (
         <div>
            <form
               onSubmit={this.onSubmit.bind(this)}
               className="form">
               <input
                  type="text"
                  name="text"
                  placeholder="Search Users..."
                  value={this.state.text}
                  onChange={this.onChange}
               />
               <input
                  type="submit"
                  value="Search"
                  className="btn btn-dark btn-block"
               />
            </form>
            {showClear && (
               <button
                  className="btn btn-light btn-block"
                  onClick={clearUsers}>
                  Clear
               </button>
            )}
         </div>
      );
   }
}

export default Search;
