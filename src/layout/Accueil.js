import React, { useState, useEffect} from 'react';
import '../style/leftAccueil.css';
import Carousel from '../component/Carousel.js';
import LastVideo from '../component/LastVideo';
import Article2 from '../component/Article';
import Partenaire from '../component/Partenaire';
import Events from '../component/Events';
import Facebook from '../component/Facebook';
import Etiquette from '../component/Etiquette';
import fondAcceuil from '../image/fond-accueil.jpg'

export default function Accueil (props) {
    const [ caption, setCaption ] = useState(null)

    useEffect(()=>{
        fetch("./texte/etiquette.json")
        .then(res => res.json())
        .then(data => setCaption(data))
    },[])

    return(
        <div>
            <div className='pb-2' style={{backgroundImage: `url(${fondAcceuil})`, backgroundSize:'cover'}}>
                <div className='p-0 col-12 col-xl-9 ml-auto mr-auto'>
                    <Carousel/>
                </div>
                <Partenaire/>
            </div>
            <div className='container-lg row sousCarousel '>
                <div id='events' className='col-lg-7 mb-4'>
                    <Etiquette text={caption && caption[0]}/>
                    <Events/>
                </div>
                <div className='video col-lg-5 mb-4'>
                    <Etiquette text={caption && caption[1]}/>
                    <LastVideo />
                </div>
                <div className='articles row col-lg-12 d-flex justify-content-between mb-4'>
                    <Etiquette text={caption && caption[2]}/>
                    <Article2 />
                    <Facebook />
                </div>
                
            </div>
        </div>
    )
}