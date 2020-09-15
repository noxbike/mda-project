import React, { Component } from 'react';
import logoMda from './logo/logo mda.png';

export default class Navbar extends Component {
    render(){
        return(
            <div className='navbar'>
                <div className='logo'><img src={ logoMda }></img></div>
                <div>
                    <ul className='onglet'>
                        <li>option1</li>
                        <li>option2</li>
                        <li>option3</li>
                        <li>option4</li>
                        <li>option5</li>
                    </ul>
                </div>
            </div>
        );
    }
}