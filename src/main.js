'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';
import '../style/main.scss';


class HeaderComponent extends React.Component {
// this is an existing component and we take it with 
// properties and overwrite it with own information with render f.

  render() {
    return (
      <header>
        <h2>Welcome to cowsay!</h2>
      </header>
    );
  }
}
class App extends React.Component {
  constructor(props) { // defining the state of the class
    super(props);
    // we call this to use the app(chid)component to have
    // access to parent component and the properties to change them

    this.state = {
      content: cowsay.say({
        text: faker.random.word(2),
        e: 'oO',
        T: 'U ',
      }),
    };
    this.handleTextIncrement = this.handleTextIncrement.bind(this);
  }

  handleTextIncrement() {
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
    <button onClick={ this.handleTextIncrement}> Change moo </button>
    </div>
    );
  }
}
const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
