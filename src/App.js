import React, { Component } from 'react';
import MobileNav from './mobileNav';
import Header from './header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MobileNav />
        <div className="App-header">
          <Header />
        </div>
        <p className="App-intro">
          Speaker List
        </p>
      </div>
    );
  }
}

export default App;
