import React, { Component } from "react";

class Search extends Component {
   state = {
      text: "",
   };

   onSubmit(e) {
      e.preventDefault();
      console.log(this.state.text);
   }

   // using brackets [] to use "e.target.name" which ouputs "text", as a key, to target in the state object
   onChange = (e) => this.setState({ [e.target.name]: e.target.value });

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
