'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';
import '../style/main.scss';


class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <h2>Welcome to cowsay!</h2>
      </header>
    );
  }
}
class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      content: cowsay.say({
        text: faker.random.word(2),
        e: 'oO',
        T: 'U ',
      }),
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange() {
    this.setState(() => { 
      return {
        content: cowsay.say({
          text: faker.random.word(2),
          e: 'oO',
          T: 'U ',
        }),
      };
    });
  }
 
  render() {
    return (
    <div>
    <HeaderComponent/> 
    <pre>{ this.state.content }</pre>     
    <button onClick={ this.handleTextChange}> Change moo </button>
    </div>
    );
  }
}
const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
