import React, { Component } from 'react';
import {PortfolioButton} from './PortfolioButton'
import {PortfolioHeader} from './PortfolioHeader'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Tobi",
      todoItems: [{ action: "Buy Flowers", done: false }, 
                  { action: "Get Shoes", done: false }, 
                  { action: "Collect Tickets", done: true }, 
                  { action: "Call Joe", done: false }], 
    }
  }

  changeStatedata = () => {
    this.setState ({
      userName: this.state.userName === "Tobi" ? "Matthew" : "Tobi"
    });
  }

  render = () => 
    <div>
      <PortfolioHeader name = {this.state.userName} />
      <div>
        <PortfolioButton callback = {this.changeStatedata} />
      </div>
    </div>
}
