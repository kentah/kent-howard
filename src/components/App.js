import React, { Component } from 'react';

import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';

class App extends Component { 
    render() {
        return(
            <div className='container'>
                <Nav />
                <Footer />        
            </div>
        );
    }
}

export default App;
