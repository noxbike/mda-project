import React from 'react'
import { Link } from 'react-router-dom';
import PresentationSalle from '../component/PresentationSalle';
import Services from '../component/Services'
import '../style/services.css';


export default function Service() {
    
    return (
        <div id='services'>
            <div className='banniere mb-4'>
                <div className='caption text-center'>
                    <h3>Responsables associatifs,<br/>
                        nous oeuvrons à apporter des réponses<br/>
                        à vos besoins et préoccupations de bénévoles ...
                    </h3>
                </div>
            </div>
            <div className='col-lg-10 ml-auto mr-auto'>
                <div className='col-lg-12'>
                    <h4 className='text-center'>Les outils et services de la Maison Des Associations de Saint-Benoît</h4>
                    <p className='text-center mb-4'>Dans le cadre de nos missions d’appui, nous accompagnons
                    la vie de votre association en vous apportant ...</p>
                </div>
                <Services />
            </div>
            <div className='reservation pb-4 mb-4 mt-4 col-lg-12'>
                    <PresentationSalle />
                    <div className='text-center'>
                        <h6 className='text-center'><strong>La réservation des salles est réservez aux adhérents de la Maison des Associations de Saint-Benoit</strong></h6>
                        <Link to='/declaration-association'>Demande d'adhésion</Link>
                    </div>
            </div>
            <p className='text-center ml-auto mr-auto' style={{width:'60%'}}>L’occupations d’un espace à la Maison des Associations s’effectue gratuitement à titre précaire
            et révocable selon la disponibilité du planning de réservation doivent parvenir au plus tard 8 jours
            avant la date de l’événement. Chaque mise à disposition d’espace vaut acceptation du règlement
            intérieur de la Maison des Associations de Saint-Benoît qui est affiché dans le hall d’accueil</p>
        </div>
    )
}
