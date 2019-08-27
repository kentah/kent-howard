import React, { Component } from 'react'; 

import studio1 from '../images/studio1.png';


class Main extends Component {
    render() {
        return(
            <div>
                <article className='pa3 pa5-ns'>
                    <img src={studio1} alt='studio1' />
                </article>
            </div>
        );
    }
}

export default Main;
