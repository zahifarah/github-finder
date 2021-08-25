import React, { Component } from "react";

class Search extends Component {
   state = {
      text: "",
   };

   // "e.target.name" in brackets to pass it as a key, returns "text" in this case
   // assign "text" whatever is returned from "e.target.value"
   // which is whatever is typed in the search bar,
   // constantly assigned and rendered by state via {this.state.text}

   // we're basically writing:    ({  returns "text":   typed value });
   onChange = (e) => this.setState({ [e.target.name]: e.target.value });

   onSubmit(e) {
      e.preventDefault();
      console.log(this.state.text);
   }

   render() {
      return (
         <div>
            <form onSubmit={this.onSubmit.bind(this)} className="form">
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
         </div>
      );
   }
}

export default Search;
