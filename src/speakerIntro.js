import React, { Component } from 'react';
import './App.css';

class header extends Component {
    render() {
        return (
        	<div className="App-intro">
              <h3>Keynote Speaker</h3>
              <img className="speaker-image" src={process.env.PUBLIC_URL+ 'maria-klawe.png'} />
              <div className="speaker-section">
                <p>More speakers to come! TBA</p>
              </div>
            </div>
        );
    }
}

export default header;
