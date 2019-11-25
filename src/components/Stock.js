import React from 'react'

const Stock = (props) => {

  const stockClicker = () => {

    props.addAStock ? props.addAStock(props.stock) : props.removeAStock(props.stock)
    console.log(props.stock)
  }

  return (
    <div>

      <div onClick={stockClicker} className="card">
        <div className="card-body">
          <h5  className="card-title">{
              //Company Name
              props.stock.name
            }</h5>
          <p className="card-text">{
              //ticker: stock price
              props.stock.ticker + ' : ' + props.stock.price
            }</p>
        </div>
      </div>


    </div>)
};

export default Stock
