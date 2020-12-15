import { faEnvelope, faFax, faMapMarked, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Partenaire from '../component/Partenaire';
import CarouselMultiple from '../component/CarouselMultiple';
import '../style/qui-somme-nous.css';
import { Link } from 'react-router-dom';

export default function QuiSommeNous() {
    return (
        <div className='qui-somme-nous d-flex flex-column justify-content-around align-items-center'>
            <CarouselMultiple/>
            <div style={{ width: '100%', backgroundColor:'gray', fontWeight:'700', color: 'white', height:'25px' }} className='text-center'>
                <p>Nos partenaires</p>
            </div>
            <Partenaire />
            <div className='mb-4 text-center' style={{ width:'80%' }}>
                <p>Le rythme soutenu de créations d’associations témoigne d’un fort dynamisme associatif. 
                    Ce dynamisme a cependant besoin d’être soutenu car il est freiné par une relative 
                    fragilité des structures associatives (isolement, faiblesse des moyens, durée de vie parfois très brève), 
                    et par le morcellement des initiatives. Il se heurte également à la méconnaissance des 
                    dispositifs d’aide existants.</p>
            </div>
            <div className='mb-4' style={{ width:'80%' }}>
                <h3>La Maison des Associations de Saint-Benoît au service de la vie locale</h3>
                <p>Afin de soutenir et encourager l’action des associations locales, la Maison 
                des associations de Saint-Benoît a pour but de leur fournir des outils pour 
                répondre au mieux à leurs besoins</p>
            </div>
            <div className='mb-4' style={{ width:'80%' }}>
                <h3>Pôle de ressources</h3>
                <p>La Maison des association de Saint-Benoît est un lieu de conseil et de formation pour les associations dans 
                tous les aspects de la vie de leur structure : création (choix d’un statut juridique), développement, 
                difficultés rencontrées... Nous mettons à leur disposition les moyens et ressources (information, 
                documentation, accompagnement de projets...) nécessaires à leur épanouissement et leur développement.</p>
            </div>
            <div className='mb-4' style={{ width:'80%' }}>
                <h3>Espace d’accueil, de rencontre et d’échange</h3>
                <p>Nous contribuons à aider les associations à entrer en relations avec d’autres, en les aidant à se faire connaître 
                et à valoriser leurs actions auprès du public. Nous soutenons l’émergence de projets inter-associatifs.</p>
            </div>
            <div className='mb-4' style={{ width:'80%' }}>
                <h3>Lieux ouvert aux dynamiques locale</h3>
                <p>L’action de la Maison des associations de Saint-Benoît est locale. Elle s’adresse aux associations de tous secteurs 
                d’activités, sans condition d’appartenance idéologique ou fédérative, dans le respect de leur 
                spécificité. Elle est de statut associatif.</p>
            </div>

            <div className='mb-4' style={{ width:'80%' }} hidden>
                <h3>Préambule</h3>
                <p>La Maison des Associations (sigle MDA) est une association régie
                    par la loi du 1er juillet 1901. Cette association est administrée par un conseil
                    d'administration (se référer aux statuts) qui veille à la bonne marche de la Maison, 
                    au respect des caractères particuliers.
                </p>
                <p>La structure a pour vocation d'accueillir et d'accompagner les associations de la
                    ville dans leur développement.
                </p>
                <p>Elle a pour but:</p>
                <ul>
                    <li>La promotion et la dynamisation de la vie associative dans la vie démocratique locale</li>
                    <li>L'éducation populaire</li>
                    <li>De fédérer les associations de la commune</li>
                    <li>de promouvoir, développer et soutenir la vie associative dans les domaines de l'éducation populaire, de la culture, du sport, du social...</li>
                </ul>
            </div>
            <div className='mb-4'>
                <Link to='/declaration-association' style={{ background:'#932724', color:'white', border:'none', height:'40px', width: '220px', fontWeight:'700', padding: '10px 15px 10px 15px', textDecoration:'none' }}>Devenir adhérent</Link>
            </div>
            
            <div className='mb-4' style={{ width:'80%' }}>
                <h3>Maison des Association de Saint-Benoît</h3>
                <p><FontAwesomeIcon icon={ faMapMarked }/> 6 rue Le Corbusier - Bras-Fusil- BP102 97470 Saint-Benoît</p>
                <p><FontAwesomeIcon icon={ faEnvelope }/> mda-saintbenoit@orange.fr</p>
                <p><FontAwesomeIcon icon={ faPhoneAlt }/> 02 62 41 34 04</p>
                <p><FontAwesomeIcon icon={ faFax }/> 02 62 41 67 14</p>
            </div>
            <div className='map' style={{ width:'100%' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5265.882157535552!2d55.711690134045064!3d-21.051044781168166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8eefb43a2c077bb!2sMaison%20des%20Associations%20de%20Saint-Beno%C3%AEt!5e0!3m2!1sfr!2sfr!4v1604948840208!5m2!1sfr!2sfr" width="100%" height="300" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    )
}
