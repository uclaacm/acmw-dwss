import React, { Component } from 'react';
import MobileNav from './mobileNav';
import Header from './header';
import SpeakerIntro from './speakerIntro';
import Footer from './footer';
import StaticMap from './staticMap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MobileNav />
        <Header />
        <SpeakerIntro />
        <StaticMap />
        <Footer />
      </div>
    );
  }
}

export default App;
