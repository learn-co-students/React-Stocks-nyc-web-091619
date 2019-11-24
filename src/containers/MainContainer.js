import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  
  state = {
    stocks: [],
    my_stocks: [],
    viewable_stocks: []
  }

  fetchStocks = () => {
    fetch("http://localhost:3002/stocks")
    .then(resp => resp.json())
    .then(fetchedStocks => this.setState({ stocks: fetchedStocks, viewable_stocks: fetchedStocks}))
  }

  componentDidMount(){
    this.fetchStocks()
  }

  buyStock = newStock => {
    if(!this.state.my_stocks.includes(newStock))
    this.setState({
      my_stocks: [...this.state.my_stocks, newStock]
    })
  }

  sellStock = stockToRemove => {
    this.setState({
      my_stocks: this.state.my_stocks.filter(stock => stock !== stockToRemove) 
    })
  }

  sortStocks = (filterParam) => {
    let filteredStocks
    switch (filterParam) {
      case "Tech":
        filteredStocks = this.state.stocks.filter(stock => stock.type === "Tech")
        break;
      case "Sportswear":
        filteredStocks = this.state.stocks.filter(stock => stock.type === "Sportswear")
        break;
      case "Finance":
        filteredStocks = this.state.stocks.filter(stock => stock.type === "Finance")
        break;
      case "Alphabetically":
          filteredStocks = this.state.viewable_stocks.sort((a, b) => (a.ticker > b.ticker) ? 1 : -1)
        break;
      case "Price":
          filteredStocks = this.state.viewable_stocks.sort((a, b) => (a.price > b.price) ? 1 : -1)
          break;
      default:
        filteredStocks = this.state.stocks
        break;
    }

    this.setState({
      viewable_stocks: filteredStocks
    })
  }


  render() {
    return (
      <div>
        <SearchBar sortBy={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.viewable_stocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer my_stocks={this.state.my_stocks} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
