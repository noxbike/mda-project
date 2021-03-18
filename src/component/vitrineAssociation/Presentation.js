import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlogger, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import profile from '../../image/profile.png';
import './vitrine.css';

export default function Presentation() {
    return (
        <div className='presentation row mt-4 justify-content-around col-12 p-0 ml-auto mr-auto' style={{fontFamily:'sans-serif',fontSize:'18px', fontWeight:'550'}}>
            <div className='row col-12 mb-4 justify-content-around'>
                <img src='/image/logo-mda.png' alt='logo' width='25%'/>
            </div>
            <div className='row col-12 mb-4 justify-content-around '>
                <h1>Maison des Associations Saint-Benoît</h1>
            </div>
            
            <div className='row justify-content-center col-10 mb-4'>
                <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                     took a galley of type and scrambled it to make.</p>
            </div>
            <div className='col-12 p-0 mt-4 mb-4 ml-auto mr-auto' style={{fontSize:'15px'}}>
                <OwlCarousel
                    items='2'
                    autoplay
                    loop
                    mouseDrag
                    rewind
                    dots={true}
                >
                    <div className='item'>
                        <div className='row p-0 cardEquipe align-items-center col-12'>
                            <div className='col-4'>
                                <img src={profile} alt='profile' width='100%'/>
                            </div>
                            <div className='col-8'>
                                <h5>Nom prénom</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='row p-0 cardEquipe align-items-center col-12'>
                            <div className='col-4'>
                                <img src={profile} alt='profile' width='100%'/>
                            </div>
                            <div className='col-8'>
                                <h5>Nom prénom</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
            <div className='qui-somme-nous col-10 mt-4 text-center'>
                <div className='mb-4'>
                    <h4>QUI SOMMES-NOUS ?</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                     took a galley of type and scrambled it to make
                     a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
            <div className='mission col-10 mt-4'>
                <div className='col-12 text-center'>
                    <h4>NOTRE MISSION</h4>
                </div>
                <div className='row col-12 justify-content-between mb-4 mt-4'>
                    <div className='row col-5 p-0 mt-4 justify-content-center align-items-center cardVitrineMission text-center'>
                        <div className='headerCard col-3'>
                            <h3>1</h3>
                        </div>
                        <div className='bodyCard col-9'>
                            <p>Mission 1</p>
                        </div>
                    </div>
                    <div className='row col-5 p-0 mt-4 justify-content-center align-items-center cardVitrineMission text-center'>
                        <div className='headerCard col-3'>
                            <h3>2</h3>
                        </div>
                        <div className='bodyCard col-9'>
                            <p>Mission 2</p>
                        </div>
                    </div>
                    <div className='row col-5 mt-4 p-0 justify-content-center align-items-center cardVitrineMission text-center'>
                        <div className='headerCard col-3'>
                            <h3>3</h3>
                        </div>
                        <div className='bodyCard col-9'>
                            <p>Mission 3</p>
                        </div>
                    </div>
                    <div className='row col-5 mt-4 p-0 justify-content-center align-items-center cardVitrineMission text-center'>
                        <div className='headerCard col-3'>
                            <h3>4</h3>
                        </div>
                        <div className='bodyCard col-9'>
                            <p>Mission 4</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-around mt-4 col-4 ml-auto mr-auto' style={{fontSize:'34px'}}>
                <FontAwesomeIcon icon={faFacebook} style={{color:'#3b5998'}}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faTwitter} style={{color:'#00acee'}}/>
                <FontAwesomeIcon icon={faBlogger} style={{color:'orange'}}/>
            </div>
            <div className='row align-items-center justify-content-around text-center col-12 mt-4 mb-4 pt-4 pb-4' style={{backgroundColor:'rgba(148, 148, 148, 0.808)', color:'white'}}>
                <div className='col-12'>
                    <p>6 rue Le Corbusier - Bras-Fusil- BP102 97470 Saint-Benoît</p>
                    <p>mda-saintbenoit@orange.fr</p>
                    <p>02 62 41 67 14</p>
                </div>
            </div>
        </div>
    )
}
