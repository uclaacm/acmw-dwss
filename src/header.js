import React, { Component } from 'react';
import './App.css';

class header extends Component {
    render() {
        return (
        	<div className="App-header">
        	<h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">ACM-W Distinguished Speaker Series</h1>
        	<div className="header-info">
        		<p>Boelter 3400</p>
        		<p>January 31st, 2017</p>
        		<p>4-5:30pm</p>
        	</div>
        	</div>
        );
    }
}

export default header;
