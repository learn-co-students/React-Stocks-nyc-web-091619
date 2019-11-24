import React from 'react'

const Stock = (props) => (
  <div onClick={() =>props.handleStock(props.stockCard)}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stockCard.name
          }</h5>
        <p className="card-text">
          {props.stockCard.ticker} : {props.stockCard.price}</p>
      </div>
    </div>


  </div>
);

export default Stock


// {
//   "id": 1,
//   "ticker": "GOOG",
//   "name": "Google",
//   "type": "Tech",
//   "price": 1194.8
// }