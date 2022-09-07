import React, { Component } from 'react';
import {PortfolioButton} from './PortfolioButton'
import {PortfolioHeader} from './PortfolioHeader'
import {TodoRow} from './TodoRow'

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

  todoTableRows = () => this.state.todoItems.map(item => 
    <TodoRow key={ item.action } item={item} />
  );

  render = () => 
    <div>
      <PortfolioHeader name = {this.state.userName} />
      <div>
        <PortfolioButton callback = {this.changeStatedata} />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>done</th>
            </tr>
          </thead>
          <tbody>
            {this.todoTableRows()}
          </tbody>
        </table>
      </div>
    </div>
}
