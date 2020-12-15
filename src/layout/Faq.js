import React from 'react'

export default function Faq() {
    return (
        <div className='faq d-flex flex-column justify-content-around align-items-center mt-4'>
            <h1 className='mb-4'>Foire aux questions</h1>
            <p className='col-md-10 mb-4'>Cette Foire Aux Questions (FAQ) reprend les questions les plus fréquemment posées. Elle a pour objectif d’apporter des réponses aux questions que peuvent se poser les personnes ayant pris des responsabilités dans une association.</p>
            <div className='mb-4 col-md-10'>
                <h3>Qu'est ce qu'une Maison des Associations (MDA) ?</h3>
                <p>Une Maison des Associations soutient l'action des associations locales par le conseil, la formation, le soutien logistique, etc...</p>
                <p>Elle instaure un jeu collectif par la mutualisation des ressources, la réflexion et la concertation, la construction de propositions.</p>
                <p>Une Maison des Associations considère les associations comme des corps intermédiaires indispensables dans la cité.
                    Autonomes vis-à-vis des collectivités pour être de vrais partenaires, capables de concevoir et réaliser les projets qui sont les leurs. dans
                    une conception partagée de l'intérêt général.
                </p>
            </div>
            <div className='mb-4 col-md-10'>
                <h3>Comment la MDA de Saint-Benoît répond-elle ses objectifs ?</h3>
                <ul>
                    <li>la formation des bénévoles et des salariés associatifs</li>
                    <li>l'organisation et la réflexion dans le domaine de la culture afin de faire des propositions à la Mairie de SAINT-BENOIT.</li>
                    <li>la participation et l'organisation d'activités culturelles</li>
                    <li>l'animation de la vie associative sur le territoire communal</li>
                    <li>l'aide aux associations</li>
                    <li>le soutien aux associations pour le développement d'activités nouvelles par la création de club de sport, de la pratique sportive et culturelle</li>
                    <li>la promotion, la réalisation, la diffusion de tous documents ou publications concernant ces activités</li>
                    <li>etc</li>
                </ul>
            </div>
        </div>
    )
}
