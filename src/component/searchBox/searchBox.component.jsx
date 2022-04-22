import React from "react";
import "./search.style.css";
export const SearchBox = ({ place, change }) => (
  <input
    type="search"
    placeholder={place}
    onChange={change}
    className="search"
  />
);
