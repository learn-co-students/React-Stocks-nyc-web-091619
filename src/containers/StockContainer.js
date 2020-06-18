import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  
//  showProps =() => {
//    console.log(this.props.stocks)
//  }

  renderStocks = () => {
    return this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} addAStock={this.props.addAStock}/>)
  }

  render() {
    // this.showProps()
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
