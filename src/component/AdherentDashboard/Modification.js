import React, { useState } from 'react'
import profile from '../../image/profile.png'
import { Link } from 'react-router-dom';
import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Main from './Main'
import './vitrine.css'
var localhost = require('../config.json')

export default function Modification(props) {
    const [ show, setShow ] = useState({show:false, what:'InformationPersonnel'})
    //mission, representant, contact, reseausocial

    const pushContact = () => {

    }

    return (
        <div className='presentation row mt-4 justify-content-around col-12 p-0 ml-auto mr-auto' style={{fontFamily:'sans-serif',fontSize:'18px', fontWeight:'550', boxShadow:'0px 0px 16px gray', borderRadius:'15px', zIndex:'1', backgroundColor:'white'}}>
            <div className='col-12'>
                <div className='col-12 left mt-2'>
                    <button onClick={() => props.contenu('presentation')} style={{outline:'none', border:'none', backgroundColor:'white', fontSize:'20px'}}>retour</button>
                </div>
                <h2 className='mt-4 text-center'>Panneau de configuration</h2>
            </div>
            
            <div className='row justify-content-between ml-auto mr-auto col-11 mt-4 mb-4'>
                <div className='row justify-content-between col-12 col-lg-5 mb-4 mt-4'  style={{borderBottom:'2px solid rgba(133, 133, 133, 0.3)'}}>
                    <p>Information personnel</p>
                    <a onClick={() => setShow({show:!show.show, what:'InformationPersonel'})}>modifier <FontAwesomeIcon icon={faEdit}/></a>
                </div>
                <div className='row justify-content-between col-12 col-lg-5 mb-4 mt-4'  style={{borderBottom:'2px solid rgba(133, 133, 133, 0.3)'}}>
                    <p>Mot de passe</p>
                    <Link to='/password'>modifier <FontAwesomeIcon icon={faEdit}/></Link>
                </div>
                <div className='row justify-content-between col-12 col-lg-5 mb-4 mt-4'  style={{borderBottom:'2px solid rgba(133, 133, 133, 0.3)'}}>
                    <p>Slogan</p>
                    <a onClick={() => setShow({show:!show.show, what:'Slogan'})}>modifier <FontAwesomeIcon icon={faEdit}/></a>
                </div>
                <div className='row justify-content-between col-12 col-lg-5 mb-4 mt-4'  style={{borderBottom:'2px solid rgba(133, 133, 133, 0.3)'}}>
                    <p>Qui somme-nous</p>
                    <a onClick={() => setShow({show:!show.show, what:'Qui sommes-nous'})}>modifier <FontAwesomeIcon icon={faEdit}/></a>
                </div>
                <div className='row justify-content-between col-12 col-lg-5 mb-4 mt-4'  style={{borderBottom:'2px solid rgba(133, 133, 133, 0.3)'}}>
                    <p>Personnels</p>
                    <a onClick={() => setShow({show:!show.show, what:'Représentant'})}>modifier <FontAwesomeIcon icon={faEdit}/></a>
                </div>
                <div className='row justify-content-between col-12 col-lg-5 mb-4 mt-4'  style={{borderBottom:'2px solid rgba(133, 133, 133, 0.3)'}}>
                    <p>Votre Mission</p>
                    <a onClick={() => setShow({show:!show.show, what:'Mission'})}>modifier <FontAwesomeIcon icon={faEdit}/></a>
                </div>
                <div className='row justify-content-between col-12 col-lg-5 mb-4 mt-4'  style={{borderBottom:'2px solid rgba(133, 133, 133, 0.3)'}}>
                    <p>Réseaux sociaux</p>
                    <a  onClick={() => setShow({show:!show.show, what:'Réseaux sociaux / localisation'})}>modifier <FontAwesomeIcon icon={faEdit}/></a>
                </div>
                <div className='row justify-content-between col-12 col-lg-5 mb-4 mt-4' style={{borderBottom:'2px solid rgba(133, 133, 133, 0.3)'}}>
                    <p>Logo</p>
                    <a onClick={() => setShow({show:!show.show, what:'Logo'})}>modifier <FontAwesomeIcon icon={faEdit}/></a>
                </div>
                <div className='row justify-content-between col-12 col-lg-5 mb-4 mt-4'  style={{borderBottom:'2px solid rgba(133, 133, 133, 0.3)'}}>
                    <p>Photo</p>
                    <a onClick={() => setShow({show:!show.show, what:'Photos'})}>modifier <FontAwesomeIcon icon={faEdit}/></a>
                </div>
            </div>
            <div className='row p-0 m-0' onClick={() => setShow({show:!show.show, what:null})} style={{position: 'absolute', height:'100%', width:'100%', backgroundColor:'rgba(0,0,0, 0.5)', borderRadius:'15px 15px 15px 15px'}} hidden={!show.show}>
            </div>
            <div className='col-6 p-0' style={{ marginBottom:'auto', marginTop:'5%', position:'absolute'}} hidden={!show.show}>
                <form className='col-4 ml-auto mr-auto pb-4 p-0' style={{backgroundColor:'white', minWidth:'100%', borderRadius:'10px'}}>
                    <div className='col-12 pt-3 pb-3 text-center' style={{backgroundColor:'rgb(66, 158, 255)', color:'white', borderRadius:'10px 10px 0px 0px', boxShadow:'0px 0px 12px gray'}}>
                        <h2 style={{fontWeight:'700'}}><FontAwesomeIcon icon={faUser} style={{fontSize:'30px'}}/> {show.what}</h2>
                    </div>
                    <Main setFormulaire={props.setFormulaire} formulaire={props.formulaire} setshow={setShow} show={show}/>
                </form>
            </div>
        </div>
    )
}