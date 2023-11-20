import React, { Component } from "react";
import style from "../components/Search.module.css";

class Search extends Component {
  render() {
    return (
      <div className={style.container}>
        <p>Search what you want</p>
        <input type="text" id="fname" name="fname" placeholder="search"></input>
      </div>
    );
  }
}

export default Search;
