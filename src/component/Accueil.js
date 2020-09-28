import React, { Component } from 'react';
import './leftAccueil.css';
import Carousel from './Carousel.js';
import Video from './Video';
import Facebook from './Facebook';
import Article2 from './Article';
import Partenaire from './Partenaire';
import Events from './Events';

export default class Accueil extends Component {
    render(){
        return(
            <div>
                <Carousel/>
                <Partenaire/>
                <div className='container sousCarousel '>
                    <div className='row'>
                        <Article2 />
                        <div className='col-12 col-md-12 col-lg-4 leftAccueil'>
                            <Video/>
                            <Facebook/>
                        </div>
                        <Events/>
                    </div>
                </div>
            </div>
        )
    }
}