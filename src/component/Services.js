import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './services.css';

export default class Services extends Component {
    render() {
        return (
            <div id='services'>
                <div>
                    <div className='mb-4'>
                        <h1>Mise à disposition de bureaux</h1>
                        <p>
                            Des bureaux équipés (ordinateur, téléphone...) peuvent être mis temporairement et gratuitement à la disposition des associations adhérentes pour des rendez-vous, des permanences associatives selon disponibilité.
                        </p>
                    </div>
                    <div className='mb-4'>
                        <h1>Mise à disposition de salle de réunion</h1>
                        <p>
                            Une salle de réunion équipée en matériel technique (Tableau blanc, paperboard, vidéoprojecteur, sonorisation, tables, chaises...) est mise temporairement et gratuitement à disposition des associations adhérentes pour les réunions statutaires, les formations...
                        </p>
                    </div>
                    <div className='mb-4'>
                        <h1>Mise à disposition de la salle d'activités</h1>
                        <p>
                            Une salle de 110m2 de surface au sol pour vos conférences, expositions, stages, colloques et activités ponctuelles est à la disposition gratuite des associations adhérentes.
                        </p>
                    </div>
                    <div className='reservation'>
                        <Link to='/reservation' href="#">Réserver</Link>
                    </div>
                </div>
            </div>
        )
    }
}
