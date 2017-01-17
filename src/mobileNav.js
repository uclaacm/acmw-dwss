import React, { Component } from 'react';
import './App.css';

class mobileNav extends Component {
    render() {
        return (
            <div className="mobile-nav">
				<div className="nav row">
					<a className="navbar-title" href={process.env.PUBLIC_URL+ '/'}><img className="navbar-logo" src={process.env.PUBLIC_URL + '/favicon.ico'}/><div className="title-color">UCLA</div> ACM-W</a>
					<ul className="navbar-right">
        			<li><a href="https://www.facebook.com/groups/uclaacmw/" target="_blank">Facebook</a></li>
        			<li><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=uclaacmw@gmail.com&tf=1">Contact Us</a></li>
        			</ul>
				</div>
			</div>
        );
    }
}

export default mobileNav;
