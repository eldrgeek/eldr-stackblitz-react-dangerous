import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      
<h2 id="dangerous-devices">Dangerouslyd devices</h2>
<p>Every day,  ,pre millions of dangerous devices are put on the web</p>


      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
