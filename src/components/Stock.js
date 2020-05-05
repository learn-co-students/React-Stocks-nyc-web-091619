
import React from 'react'

const Stock = (props) => {

  const getIcon = () =>{
    switch (props.stock.type){
      case "Tech":
        return "🖥"
      case "Sportswear":
        return "👚"
      case "Finance":
        return "💰"
      default:
        return ""
    }
  }
  const handleClick = () =>{
    props.handleClick(props.stock)
  }

  return (
    <div>
    <div className="card" onClick={handleClick}>
      <div className="card-body">
        <h5 className="card-title">{props.stock.name}: {getIcon()}</h5>
        <p className="card-text">
            {props.stock.ticker}: {props.stock.price}
          </p>
      </div>
    </div>
    </div>
  )
}

export default Stock
