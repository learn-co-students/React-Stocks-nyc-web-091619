import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    displayStocks: [],
    portfolio: []  
  }

  addToPortfolio = (stock) => {
    this.setState({ portfolio: [...this.state.portfolio, stock] })
  }

  removeFromPortfolio = (stock) => {
    this.setState({ portfolio: this.state.portfolio.filter(s => s !== stock) })
  }

  filterStocks = (type) => {
    this.setState({ displayStocks: this.state.stocks.filter(s => s.type === type) })
  }

  sortStocks = (condition) => {
    switch (condition) {
      case 'Alphabetically':
        this.setState({ displayStocks: this.state.displayStocks.sort((stockOne, stockTwo) => {
            if (stockOne.ticker > stockTwo.ticker) {
              return 1
            } else if (stockOne.ticker < stockTwo.ticker) {
              return -1
            }
          })
        })
        break;
      case 'Price':
          this.setState({ displayStocks: this.state.displayStocks.sort((stockOne, stockTwo) => {
            if (stockOne.price > stockTwo.price) {
              return 1
            } else if (stockOne.price < stockTwo.price) {
              return -1
            }
          })
        })
        break;
    }
  }

  render() {
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} filterStocks={this.filterStocks} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} addToPortfolio={this.addToPortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeFromPortfolio={this.removeFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        stocks: json,
        displayStocks: json
      })
    })
  }

}

export default MainContainer;
