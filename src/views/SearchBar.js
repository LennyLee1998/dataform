import React from "react";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input placeholder="Search" />
      <form>
        <label>
          <input type="checkbox"></input>
          <span>Only show products in stock</span>
        </label>
      </form>
    </div>
  );
}
