import React, { Component } from 'react';
import Carousel from './Carousel.js';
import Video from './Video';
import Facebook from './Facebook';
import Article2 from './Article';

export default class Accueil extends Component {
    render(){
        return(
            <div>
                <Carousel className='col-12'/>
                <div className='row  col-12 d-flex justify-content-center sousCaroussel'>
                    <Article2 className='col-md-7'/>
                    <div className='col-offset-md-1 col-md-3'>
                        <Video/>
                        <Facebook/>
                    </div>
                </div>
            </div>
        )
    }
}