import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
var localhost = require('./config.json');

export default function CarouselMultiple() {
    return (
        <div className='col-lg-12 p-0'>
            <OwlCarousel
                items='5'
                autoplay
                loop
                mouseDrag
                rewind
                dots={false}
            >
                <div className='item'>
                    <img src='./image/qui-somme-nous/img1.jpg' className="img-fluid mx-auto d-block" alt="img1"/>
                </div>
                <div className='item'>
                    <img src='./image/qui-somme-nous/img2.jpg' className="img-fluid mx-auto d-block" alt="img2"/>
                </div>
                <div className='item'>
                    <img src='./image/qui-somme-nous/img3.jpg' className="img-fluid mx-auto d-block" alt="img3"/>
                </div>
                <div className='item'>
                    <img src='./image/qui-somme-nous/img4.jpg' className="img-fluid mx-auto d-block" alt="img4"/>
                </div>
                <div className='item'>
                    <img src='./image/qui-somme-nous/img5.jpg' className="img-fluid mx-auto d-block" alt="img5"/>
                </div>
                <div className='item'>
                    <img src='./image/qui-somme-nous/img6.jpg' className="img-fluid mx-auto d-block" alt="img6"/>
                </div>
                <div className='item'>
                    <img src='./image/qui-somme-nous/img7.jpg' className="img-fluid mx-auto d-block" alt="img7"/>
                </div>
                <div className='item'>
                    <img src='./image/qui-somme-nous/img8.jpg' className="img-fluid mx-auto d-block" alt="img8"/>
                </div>
                
            </OwlCarousel>
    </div>
    )
}
