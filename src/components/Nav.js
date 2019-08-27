import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Main from '../components/Main';
import About from '../components/About';

import Footer from '../components/Footer';


class Nav extends Component {

    render() {
        return(
            <Router>
                <div>
                    <nav className='pa3 pa4-ns'>
                        <Link to='/' className='link dim black b f6 f5-ns dib mr3'>Kent-Howard</Link>
                        <Link to='/' className='link dim gray f6 f5-ns dib mr3'>Home</Link>
                        <Link to='/about/' className='link dim gray f6 f5-ns dib mr3'>About</Link>
                        <a className='link dim gray f6 f5-ns dib mr3' href='#' title='Store'>Blog</a>
                        <a className='link dim gray f6 f5-ns dib' href='#' title='Contact'>Contact</a>
                    </nav>
                <Route path='/' component={ Main } />
                <Route path='/about/' exact component={ About } />            
                </div>
            </Router>
        );
    }
}

export default Nav;
