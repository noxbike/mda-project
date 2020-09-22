import React, { Component } from 'react';
import Carousel from './Carousel.js';
import Video from './Video';
import Facebook from './Facebook';
import Article2 from './Article';

export default class Accueil extends Component {
    render(){
        return(
            <div>
                <Carousel/>
                <div className='container sousCaroussel'>
                    <Article2/>
                    <div>
                        <Video/>
                        <Facebook/>
                    </div>
                </div>
            </div>
        )
    }
}