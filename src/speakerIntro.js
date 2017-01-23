import React, { Component } from 'react';
import './App.css';

class speakerIntro extends Component {
    render() {
        return (
        	<div className="App-intro">
              <h1>Keynote Speaker</h1>
              <img className="speaker-image" data-aos="fade-up" data-aos-delay="200" src={process.env.PUBLIC_URL+ 'maria-klawe.png'} />
            </div>
        );
    }
}

export default speakerIntro;
