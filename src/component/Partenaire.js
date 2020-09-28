import React, { Component } from 'react';
import './partenaire.css';
import VilleStBenoit from './logo/ville de saint benoit-logo.png';
import Djscs from './logo/djscs-logo.png';
import Crajep from './logo/crajep-logo.jpg';
import ServiceCivique from './logo/service civique-logo.jpg';
import CaseALire from './logo/case à lire-logo.png';
import Rnma from './logo/Rnma.gif';

export default class Partenaire extends Component {
    render(){
        return(
            <div className='partenaire'>
                <ul>
                    <li><a href='https://www.saint-benoit.re/' target='_blank'><img className='img-fluid' src={ VilleStBenoit } alt='ville-de-saint-benoit' width='150px'/></a></li>
                    <li><a href='http://reunion.drjscs.gouv.fr/' target='_blank'><img className='img-fluid' src={ Djscs } alt='Djscs-réunion' width='150px'/></a></li>
                    <li><a href='http://www.cnajep.asso.fr/crajep/crajep-reunion/' target='_blank'><img className='img-fluid' src={ Crajep } alt='Crajep-réunion' width='150px'/></a></li>
                    <li><a href='https://www.service-civique.gouv.fr/' target='_blank'><img className='img-fluid' src={ ServiceCivique } alt='Service-civique' width='150px'/></a></li>
                    <li><a href='#'><img className='img-fluid' src={ CaseALire } alt='Case-à-lire' width='150px'/></a></li>
                    <li><a href='https://www.maisonsdesassociations.fr/' target='_blank'><img className='img-fluid' src={ Rnma } alt='Rnma' width='100px'/></a></li>
                </ul>
            </div>
        )
    }
}