import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import profile from '../../image/profile.png';
import './vitrine.css';
import { faEdit, faEnvelope, faGlobe, faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import time from '../utils/timeFormat';
var localhost = require('../config.json');

export default function Presentation(props) {
    const [ logoSocial, setLogoSocial ] = useState([{"name":"site", "component":faGlobe, "color":"white"}, {"name":"twitter", "component":faTwitter, "color":"white"}, {"name": "facebook", "component":faFacebook, "color":'white'}, {"name":"instagram", "component":faInstagram, "color":"white"}])
    const [ agenda, setAgenda ] = useState(null)

    useEffect(() => {
        fetch(`http://${ localhost.localhost }/api/agenda`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {setAgenda(data.agendaFound)})
    }, [])


    return (
        <div className='presentation row mt-4 justify-content-around col-12 p-0 ml-auto mr-auto' style={{fontFamily:'sans-serif',fontSize:'18px', fontWeight:'550', boxShadow:'0px 0px 16px gray', borderRadius:'15px', zIndex:'2000', backgroundColor:'white'}}>
                {props.association &&
                <div className='col-12 p-0 pt-4'>
                    <div className='row col-12 mb-4 justify-content-around'>
                        <img src={props.association.logo && `http://${localhost.localhost}/association/logo/${props.association.logo}`} alt='logo' width='25%'/>
                    </div>
                    <div className='row col-12 mb-4 justify-content-around '>
                        <h1>{props.association.lien && props.association.lien}</h1>
                    </div>
                    
                    <div className='row justify-content-center col-10 mb-4'>
                        <p className='text-center'>{props.association && props.association.slogan}</p>
                    </div>
                    <div className='qui-somme-nous col-10 mt-4 mb-4 text-center ml-auto mr-auto'>
                        <div className='mb-4'>
                            <h4>QUI SOMMES-NOUS ?</h4>
                        </div>
                        <p>{props.association && props.association.histoire}</p>
                    </div>
                    <div className='col-12 p-0 pt-4 pb-4 ml-auto mr-auto' style={{fontSize:'15px', backgroundColor:'rgba(196, 196, 196, 0.2)'}}>
                        <div className='col-12 pt-4 pb-4'>
                            <h4 className='text-center'>NOTRE EQUIPE</h4>
                        </div>
                        <OwlCarousel
                            items={props.association.personne.length < 2 ? '1' : '2'}
                            autoplay={props.association.personne.length > 2 ? true : false}
                            loop
                            mouseDrag
                            rewind
                            dots={true}
                        >
                            {props.association.personne && JSON.parse(props.association.personne).map( item => <div className='item'>
                                <div className='row p-0  justify-content-center cardEquipe align-items-center col-12'>
                                    <div className='col-3'>
                                        <img src={profile} alt='profile' width='100%'/>
                                    </div>
                                    <div className='col-3'>
                                        <h5>{item.nomEtPrenom}</h5>
                                        <p>{item.fonction}</p>
                                    </div>
                                </div>
                            </div>
                            )}
                        </OwlCarousel>
                    </div>
                    <div className='mt-4'>
                        <div className='col-12 mb-4'>
                            <h4 className='text-center'>NOTRE AGENDA</h4>
                        </div>
                        <div className='row justify-content-around col-12'>
                            {agenda && agenda.map(item => item.auteur === props.association.lien ?
                                <div key={item.id} className='p-0 mb-4' style={{ height:'400px', width:'250px'}}>
                                    <Link className='row cart' to={`/agenda/${item.url}`} style={{ height:'400px', width:'250px'}}>
                                        <div className='row m-0 p-0 ml-auto mr-auto' style={{backgroundImage:`url(http://${localhost.localhost}/${item.photo})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'80%', width:'100%'}} ></div>
                                        <div className='face2 row justify-between m-0 p-0'>
                                            <div className='text-center' style={{fontWeight:'bolder',fontSize:'0.8em', width:'20%', backgroundColor:'#932824c2', color:'white'}}>
                                                <p>{time(item.du)}</p>
                                            </div>
                                            <div className='text-center' style={{width:'70%'}}>
                                                <h5>{item.titre}</h5>
                                            </div>
                                            
                                        </div>
                                    </Link>
                                </div>
                                :'')
                            }
                        </div>
                    </div>
                    <div className='mission col-10 mt-4 ml-auto mr-auto'>
                        <div className='col-12 text-center'>
                            <h4>NOTRE MISSION</h4>
                        </div>
                        <div className='row col-12 justify-content-around mb-4 mt-4'>
                            {props.association.mission && JSON.parse(props.association.mission).map( (item, index) =>
                                <div className='row col-3 p-0 mt-4 justify-content-center align-items-around cardVitrineMission text-center' style={{border:'1px solid rgba(163, 163, 163, 0.3)', height:'250px', boxShadow:'0px 0px 12px rgba(163, 163, 163, 0.2)', backgroundColor:`${ index % 2 ? 'rgba(163, 163, 163)' : 'rgba(93, 204, 232)'}`, color:'white'}}>
                                    <div className='headerCard col-12 mt-4'>
                                        <h3>{item}</h3>
                                    </div>
                                    <div className='bodyCard col-12'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='row justify-content-around mt-4 col-4 ml-auto mr-auto' style={{fontSize:'34px'}}>
                        {props.association.social && JSON.parse(props.association.social).map((item, index) => item.show ?
                            <a href={item.link}><FontAwesomeIcon icon={logoSocial[index].component} style={{color:`${logoSocial[index].color}`}}/></a>: ''
                        )}
                    </div>
                    <div className='col-12 pt-4 p-0'>
                        {props.association.contact.map && parse(props.association.contact.map)}
                    </div>
                    <div className='row align-items-center text-left col-12 pt-4 pb-4 m-0' style={{backgroundColor:'rgb(46, 43, 43)', color:'white',marginTop:'-5px', borderRadius:'0px 0px 5px 5px'}}>
                        <div className='col-6'>
                            <div className='col-8 ml-auto mr-auto'>
                                <p><span><FontAwesomeIcon icon={faMapMarkedAlt}/></span> {props.association && props.association.contact.addresse}</p>
                                <p><span><FontAwesomeIcon icon={faEnvelope}/></span> {props.association && props.association.email}</p>
                                <p><span><FontAwesomeIcon icon={faPhoneAlt}/></span> {props.association && props.association.contact.tel}</p>
                            </div>
                        </div>
                        <div className='mt-4 col-4 ml-auto mr-auto col-6' style={{fontSize:'24px'}}>
                            <div className='col-12 text-center'>
                                <h4>Suivez nous :</h4>
                            </div>
                            <div className='col-8 row justify-content-around ml-auto mr-auto'>
                                {props.association.social && JSON.parse(props.association.social).map((item, index) => item.show ?
                                    <a href={item.link}><FontAwesomeIcon icon={logoSocial[index].component} style={{color:`${logoSocial[index].color}`}}/></a>: ''
                                )}
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}
