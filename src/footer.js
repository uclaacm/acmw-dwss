import React, { Component } from 'react';
import './App.css';

class footer extends Component {
    render() {
        return (
    	<div className="App-footer">
        <div className="more-info">
            <h3>More speakers to come!</h3>
        </div>
        <div className="row">
            <div className="col-xs-4 col-xs-offset-2 host">
            Hosted by
            <br/>
                <b className="acmw-footer">UCLA ACM-W</b>
            </div>
            <div className="col-xs-4 host">
            <span>Supervised by</span>
            <br/>
            <b>Prof. Miryung Kim</b>
            </div>
        </div>
    	<div className="contact-info">
        	<a href='https://www.facebook.com/groups/uclaacmw/' target="_blank"><i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i></a>
			<a href="https://twitter.com/@ucla_acmw" target="_blank"><i className="fa fa-twitter fa-3x"></i></a>
			<a href="https://medium.com/@uclaacmw" target="_blank"><i className="fa fa-medium fa-3x" aria-hidden="true"></i></a>
			<a href="uclaacmw@gmail.com"><i className="fa fa-envelope fa-3x"></i></a>
            <p className="footer-info"><a href="https://github.com/jiminkk" target="_blank">Copyright © 2017</a></p>
        </div>
        </div>
        );
    }
}

export default footer;
