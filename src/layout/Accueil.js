import React, { Component } from 'react';
import '../style/leftAccueil.css';
import Carousel from '../component/Carousel.js';
import Video from '../component/Video';
import Article2 from '../component/Article';
import Partenaire from '../component/Partenaire';
import Events from '../component/Events';
import Facebook from '../component/Facebook';
import Etiquette from '../component/Etiquette';

export default class Accueil extends Component {
    render(){
        return(
            <div>
                <Carousel/>
                <Partenaire/>
                <div className='container-lg row sousCarousel '>
                    <div id='events' className='col-lg-7 mb-4'>
                        <Etiquette text='Agenda'/>
                        <Events/>
                    </div>
                    <div className='video col-lg-5 mb-4'>
                        <Etiquette text='Video'/>
                        <Video />
                    </div>
                    <div className='articles row col-lg-12 d-flex justify-content-between mb-4'>
                        <Etiquette text='Actualités'/>
                        <Article2 />
                        <Facebook />
                    </div>
                    
                </div>
            </div>
        )
    }
}