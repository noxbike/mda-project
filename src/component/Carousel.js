import React, { Component } from 'react';
import './carousel.css';
import lantern from './logo/lantern.jpg';

export default class Carousel extends Component {
    render(){
        return(
            <div id="video-carousel-example2" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="view">
                            <video className="video-fluid" autoPlay loop muted>
                                <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" width="1024" height="552" />
                            </video>
                            <div className="full-bg-img flex-center">
                                <div className="carousel-caption masque">
                                    <div className="animated fadeInDown">
                                        <h3 className="h1-responsive animate__animated animate__bounceInRight">Landing Page</h3>
                                        <p className='animate__animated animate__bounceInLeft'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="view">
                            <video className="video-fluid" autoPlay loop muted>
                                <source src="https://mdbootstrap.com/img/video/animation-intro.mp4" type="video/mp4" width='100%' />
                            </video>
                            <div className="full-bg-img flex-center">
                                <div className="carousel-caption masque">
                                    <div className="animated fadeInDown">
                                        <h3 className="h3-responsive animate__animated animate__bounceInRight">Super light mask</h3>
                                        <p className='animate__animated animate__bounceInLeft'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <a href="#" className='butn butn__new animate__animated animate__bounceIn'><span>Contact</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="view">
                            <video muted autoPlay loop>
                                <source src="https://mdbootstrap.com/images/video/Tropical.mp4" type="video/mp4" width='100%' />
                            </video>
                            <div className="full-bg-img flex-center">
                                <div className="carousel-caption masque">
                                    <div className="animated fadeInDown">
                                        <h3 className="h3-responsive animate__animated animate__bounceInRight">Strong mask</h3>
                                        <p className='animate__animated animate__bounceInLeft'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="view">
                            <img src={lantern} alt="Second slide" />
                            <div className="full-bg-img flex-center">
                                <div className="carousel-caption masque-img">
                                    <h3 className="h3-responsive animate__animated animate__bounceInRight">Strong mask</h3>
                                    <p className='animate__animated animate__bounceInLeft'>Secondary text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#video-carousel-example2" role="button" data-slide="prev">
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#video-carousel-example2" role="button" data-slide="next">
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}