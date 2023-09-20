import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <>
      <form className="margin-bottom-3 searchfield-container">
        {/* <label className="search-text">Project Name :</label> */}
        <input
          type="search"
          placeholder="Search by Project Name..."
          name="query"
          className="searchfield"
          onChange={searchChange}
        />

        {/* <ion-icon className="search-icon" name="search-outline"></ion-icon> */}
      </form>
    </>
  );
};

export default SearchBox;
