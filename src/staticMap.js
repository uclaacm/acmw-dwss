import React, { Component } from 'react';
import './App.css';

class staticMap extends Component {
  render() {
    return (
    	<div className="App-location">
    	<h1>Location</h1>
        <a href="https://www.google.com/maps/place/580+Portola+Plaza,+Los+Angeles,+CA+90095/" target="_blank">
        <div className="App-map">
        </div>
        </a>
        </div>
    );
  }
}

export default staticMap;