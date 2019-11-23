import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    portfolioStocks: [],
    priceSort: false,
    industrySort: "all", // Tech, 
    alphaSort: false
  }

  sortStocks = () =>{
    let sorted = [...this.state.allStocks]
    if(this.state.alphaSort){
      sorted.sort((a,b) => a.name > b.name ? 1 : -1)
    }

    if(this.state.priceSort){
      sorted.sort((a,b)=> a.price - b.price)
    }
    if(this.state.industrySort !== "all"){
      sorted = sorted.filter(stock => stock.type === this.state.industrySort)
    }
    return sorted
  }

  changePriceSort = () =>{
    this.setState({
      priceSort: !this.state.priceSort,
      alphaSort: false
    })
  }

  changeAlphaSort = () =>{
    this.setState({
      alphaSort: !this.state.alphaSort,
      priceSort: false
    })
  }

  changeIndustrySort = (sort) =>{
    this.setState({
      industrySort: sort
    })
  }

  
  handleBuy = (stock) => {
    console.log("adding, ", stock, " to portfolio")
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }
  
  handleSell = (stock) => {
    console.log("removing", stock, " from portfolio")
    let index = this.state.portfolioStocks.findIndex(aStock => aStock === stock)
    let newPort = [...this.state.portfolioStocks]
    newPort.splice(index, 1)
    this.setState({
      portfolioStocks: [...newPort]
    })
  }
  
  componentDidMount(){
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          allStocks: data
        })
      })
  }

  render() {
    console.log("state on render = ", this.state)
    return (
      <div>
        <SearchBar alphaChecked={this.state.alphaSort} priceChecked={this.state.priceSort}changeAlphaSort={this.changeAlphaSort} changeIndustrySort={this.changeIndustrySort} changePriceSort={this.changePriceSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer handleBuy={this.handleBuy} stocks={this.sortStocks()}/>

            </div>
            <div className="col-4">

              <PortfolioContainer handleSell={this.handleSell} stocks={this.state.portfolioStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
