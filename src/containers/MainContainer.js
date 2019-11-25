import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const api = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    stocks: [],
    addedStock: [],
    sortedStocks: []
  }

  componentDidMount() {
    fetch(api).then(res => res.json()).then(stocks => this.setState(
      { 
        stocks: stocks,
        sortedStocks: stocks
      }))
  }

  addAStock = (pickedStock) => {
    this.setState({ addedStock:  [...this.state.addedStock, pickedStock ] });
  }

  removeAStock = (pickedStock) => {
    this.setState({ addedStock: this.state.addedStock.filter(stock => stock.id !== pickedStock.id)  });
    //how can you only remove one instance
  }

  filteredStocks = (value) => {
    let fStocks = [...this.state.stocks]
    let sortedStocks
    switch(value) {
      case 'Alphabetically':
        sortedStocks = fStocks.sort((stockA, stockB) => {
          if (stockA.name > stockB.name){
            return 1
          } else if (stockA.name < stockB.name) {
            return -1
          } else {
            return 0
          }
        })
        break;
      case 'Price':
        sortedStocks = fStocks.sort((stockA, stockB) => stockA.price - stockB.price)
        break;
      default:
        sortedStocks = this.state.stocks
        break;
    }
  this.setState({ sortedStocks: sortedStocks }); 
}
  
  byTypeStocks = (value) => {
    let sortedStocks = [...this.state.sortedStocks]
    sortedStocks = sortedStocks.filter(stock => stock.type.includes(value))
    this.setState({ sortedStocks: sortedStocks  });
  }
  

  render() {
    return (
      <div>
        <SearchBar filteredStocks={this.filteredStocks} byTypeStocks={this.byTypeStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.sortedStocks} addAStock={this.addAStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.addedStock} removeAStock={this.removeAStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
