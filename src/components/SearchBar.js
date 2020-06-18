import React from 'react';
//import { prependOnceListener } from 'cluster';

const SearchBar = (props) => {

  const handleAlphaChange = (e) =>{
    props.changeAlphaSort()
  }

  const handleIndustryChange = (e) =>{
    props.changeIndustrySort(e.target.value)
  }

  const handlePriceChange = (e) =>{
    props.changePriceSort()
  }


  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.alphaChecked} onChange={handleAlphaChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.priceChecked} onChange={handlePriceChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleIndustryChange}>
          <option value="all">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
