import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '../style/contact.css';
const localhost = require('./config.json');

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            association:'',
            message:'',
            numero:'',
            nom:'',
            prenom:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
       fetch(`http://${ localhost.localhost }/api/contact`,{
           method:'POST',
           body: JSON.stringify({
               'email':this.state.email,
               'association':this.state.association,
               'message':this.state.message,
               'numero':this.state.numero,
               'nom':this.state.nom,
               'prenom':this.state.prenom
           }),
           headers:{
               'Content-Type': 'application/json'
           }
       })
       .then(res => res.json())
       .then((result) => { })
    }

    render(){
        return(
            <div className='contact'>
                <div className='fond-contact'>
                    <div className='masque-contact'>
                    </div>
                </div>
                <div className='formulaire-contact'>
                    <div className="container my-5">
                        <div className='row top-contact'>
                            <div className='col-md-12 col-lg-8 col-xl-8'>
                                <h1>Rejoignez nous</h1>
                            </div>
                            <div className='row align-items-center justify-content-around col-12 col-md-12 col-lg-4 mt-4'>
                                <div>
                                    <i className="fa fa-clock-o" style={{fontSize: '2em'}} aria-hidden="true"></i>
                                </div>
                                <p className='text-center'>Du Lundi au Vendredi <br/>de<br/> 8h à 17h</p>
                            </div>
                        </div>
                        <section className="contact-section dark-grey-text mb-5">
                            <div className="card">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="card-body form">
                                            <p className='label-contact'>Votre message</p>
                                            <form onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="md-form mb-0">
                                                        <input type="text" id="form-contact-name" className="form-control" onChange={(e) => this.setState({nom: e.target.value})} placeholder='Nom'/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                        <input type="text" id="form-contact-name" className="form-control" onChange={(e) => this.setState({prenom: e.target.value})} placeholder='Prénom'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="md-form mb-0">
                                                        <input type="text" id="form-contact-phone" className="form-control" onChange={(e) => this.setState({numero: e.target.value})} placeholder='Télephone'/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="md-form mb-0">
                                                        <div className="md-form mb-0">
                                                            <input type="text" id="form-contact-email" className="form-control" onChange={(e) => this.setState({email: e.target.value})} placeholder='Email' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="md-form mb-0">
                                                        <input type="text" id="form-contact-name" className="form-control" onChange={(e) => this.setState({association: e.target.value})} placeholder='Association'/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="md-form mb-0">
                                                        <textarea id="form-contact-message" className="form-control md-textarea" rows="9" placeholder='Message' onChange={(e) => this.setState({message: e.target.value})}></textarea>
                                                        <button type="submit" className="btn btn-outline-secondary" style={{marginTop:'2%'}} data-toggle="button" aria-pressed="false" autoComplete="off">
                                                            Envoyer <FontAwesomeIcon icon={faPaperPlane}/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 p-0 contact-information">
                                        <div className="card-body contact text-center h-100 white-text">
                                            <h5 className="font-weight-bold my-4 pb-2">Contact information</h5>
                                            <ul className="text-lg-left list-unstyled ml-4">
                                                <li>
                                                    <p><i className="fas fas fa-map-marker fa pr-2"></i>6 rue Le Corbusier - Bras-Fusil - BP102
                                                    97470 Saint-Benoît</p>
                                                </li>
                                                <li>
                                                    <p><i className="fas fa-phone fa pr-2"></i>02 62 41 34 04</p>
                                                </li>
                                                <li>
                                                    <p><i className="fas fa-print fa pr-2"></i>02 62 41 67 14</p>
                                                </li>
                                                <li>
                                                    <p><i className="fas fa-envelope fa pr-2"></i>mda-saintbenoit@orange.fr</p>
                                                </li>
                                                <li>
                                                    <a href='https://www.facebook.com/pg/MDAdeStBenoit/posts/' target='__blank' className='text-left' style={{color:'white'}}>
                                                        <i className="fab fa-facebook-f fa"></i>  <span className='pl-1' style={{fontWeight:'400'}}>facebook.com/MDAdeStBenoit</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}