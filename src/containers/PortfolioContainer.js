import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolioStocks = () => {
    return this.props.portfolio.map((stock, index) => <Stock key={index} stock={stock} clickHandler={this.props.removeFromPortfolio} />)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.renderPortfolioStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
