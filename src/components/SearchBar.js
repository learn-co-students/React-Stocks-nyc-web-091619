import React from 'react';

const SearchBar = (props) => {

  const alphabeticalHandler = (e) => {
    props.filteredStocks(e.target.value)
  }

  const priceHandler = (e) => {
    props.filteredStocks(e.target.value)
  }

  const filterHandler = (e) => {
    props.byTypeStocks(e.target.value)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={alphabeticalHandler}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={priceHandler}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={filterHandler}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
