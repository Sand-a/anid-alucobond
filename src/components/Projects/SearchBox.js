import React from "react";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <>
      <form className="searchfield-container">
        <label className="search-text">Project Name :</label>
        <input
          type="text"
          placeholder="Search"
          name="query"
          className="searchfield"
        />

        <ion-icon className="search-icon" name="search-outline"></ion-icon>
      </form>
    </>
  );
};

export default SearchBox;
