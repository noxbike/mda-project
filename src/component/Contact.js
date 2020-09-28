import React, { Component } from 'react';
import './contact.css';

export default class Contact extends Component {
    render(){
        return(
            <div className='contact'>
                <div className='fond-contact'>
                    <div className='masque-contact'>
                    </div>
                </div>
                <div className='formulaire-contact'>
                    <div class="container my-5">
                        <div className='row top-contact'>
                            <div className='col-md-12 col-lg-8'>
                                <h1>Contactez-nous</h1>
                            </div>
                            <div className='row col-md-12 col-lg-4'>
                                <div className='col-12 col-md-2 col-lg-2'>
                                    <i class="fa fa-clock-o" style={{fontSize: '2em'}} aria-hidden="true"></i>
                                </div>
                                <ul className='col-6 col-md-4 col-lg-4'>
                                    <li><strong>Lundi :</strong></li>
                                    <li><strong>Mardi :</strong></li>
                                    <li><strong>Mercredi :</strong></li>
                                    <li><strong>Jeudi :</strong></li>
                                    <li><strong>Vendredi :</strong></li>
                                </ul>
                                <ul className='col-6 col-md-5 col-lg-5'>
                                    <li>8h-12h 13h-17h</li>
                                    <li>8h-12h 13h-17h</li>
                                    <li>8h-12h 13h-17h</li>
                                    <li>8h-12h 13h-17h</li>
                                    <li>8h-12h 13h-17h</li>
                                </ul>
                            </div>
                        </div>
                        <section class="contact-section dark-grey-text mb-5">
                            <div class="card">
                                <div class="row">
                                    <div class="col-lg-8">
                                        <div class="card-body form">
                                            <h5 class="label-formulaire font-weight-bold dark-grey-text mt-4">Message</h5>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="md-form mb-0">
                                                        <input type="text" id="form-contact-name" class="form-control" placeholder='Nom'/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                <div class="md-form mb-0">
                                                        <input type="text" id="form-contact-name" class="form-control" placeholder='Prénom'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="md-form mb-0">
                                                        <input type="text" id="form-contact-phone" class="form-control" placeholder='Télephone'/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="md-form mb-0">
                                                        <div class="md-form mb-0">
                                                            <input type="text" id="form-contact-email" class="form-control" placeholder='Email' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="md-form mb-0">
                                                        <input type="text" id="form-contact-name" class="form-control" placeholder='Association'/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="md-form mb-0">
                                                        <textarea id="form-contact-message" class="form-control md-textarea" rows="9" placeholder='Message'></textarea>
                                                        <button type="button" class="btn btn-outline-secondary" style={{marginTop:'2%'}} data-toggle="button" aria-pressed="false" autocomplete="off">
                                                            Envoyer <i class="far fa-paper-plane fa"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 contact-information">
                                        <div class="card-body contact text-center h-100 white-text">
                                            <h5 class="font-weight-bold my-4 pb-2">Contact information</h5>
                                            <ul class="text-lg-left list-unstyled ml-4">
                                                <li>
                                                    <p><i class="fas fas fa-map-marker fa pr-2"></i>6 rue Le Corbusier - Bras-Fusil - BP102
                                                    97470 Saint-Benoît</p>
                                                </li>
                                                <li>
                                                    <p><i class="fas fa-phone fa pr-2"></i>02 62 41 34 04</p>
                                                </li>
                                                <li>
                                                    <p><i class="fas fa-print fa pr-2"></i>02 62 41 67 14</p>
                                                </li>
                                                <li>
                                                    <p><i class="fas fa-envelope fa pr-2"></i>mda-saintbenoit@orange.fr</p>
                                                </li>
                                            </ul>
                                            <ul class="list-inline text-center list-unstyled">
                                            <li class="list-inline-item">
                                                    <a class="p-2 fa-lg fb-ic">
                                                        <i class="fab fa-facebook-f fa"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a class="p-2 fa-lg tw-ic">
                                                        <i class="fab fa-twitter fa"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a class="p-2 fa-lg li-ic">
                                                        <i class="fab fa-linkedin fa"> </i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a class="p-2 fa-lg ins-ic">
                                                        <i class="fab fa-instagram fa"> </i>
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