import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './PortfolioButton.css'


export class PortfolioButton extends Component {
    render = () => 
        <div className='cta-button'>
            <button onClick={this.props.callback}>Click me</button>
        </div>
};