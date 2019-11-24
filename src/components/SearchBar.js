import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sort" value="Alphabetically" onChange={e => props.sortBy(e.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sort" value="Price" onChange={e => props.sortBy(e.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={e => {props.sortBy(e.target.value); e.target.parentNode.parentNode.querySelectorAll("input[type=radio]").forEach(radio => radio.checked = false)}}>
          <option name="sort" value="Tech">Tech</option>
          <option name="sort" value="Sportswear">Sportswear</option>
          <option name="sort" value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
