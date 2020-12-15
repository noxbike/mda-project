import React, { Component } from 'react';
import '../style/serviceCivique.css';
import logoServiceCivique from '../image/ServiceCivique_faiteslesaut.png';

export default class CestQuoi extends Component{
    render(){
        return(
            <div className='c-est-quoi'>
                <div>
                    <img className='serviceCivique'src={ logoServiceCivique } alt='service-civique'/>
                </div>
                <h1>Qu'est ce que le Service Civique ?</h1>
                <p>Le Service Civique s’adresse à tous les jeunes de 16 à 25 ans</p>
                <p>Il s’agit :<br/>
                    D’un engagement volontaire d’une durée moyenne de 8 mois,
                    pour l’accomplissement d’une mission d’intérêt général dans un des neuf domaines d’interventions reconnus prioritaires pour la Nation :
                </p>
                <ul>
                    <li>solidarité</li>
                    <li>santé</li>
                    <li>éducation pour tous</li>
                    <li>culture et loisirs</li>
                    <li>sport</li>
                    <li>environnement</li>
                    <li>mémoire et citoyenneté</li>
                    <li>développement international et action humanitaire</li>
                    <li>intervention d’urgence</li>
                </ul>

                <h1>S’engager en situation d'handicap</h1>
                <p>Effectuer une mission de Service Civique en situation de handicap, c’est possible !</p>
                <p>Le Service Civique a pour objet de renforcer la cohésion nationale et la mixité sociale en offrant à toute personne volontaire l’opportunité de s’engager au service de la collectivité. L’accès des jeunes en situation de handicap au Service Civique fait donc partie des priorités de l’Agence du Service Civique depuis sa création.

                    Afin de rendre le Service Civique encore plus accessible, l’âge d’accueil des jeunes volontaires en situation de handicap est porté à 30 ans, contre 25 précédemment.

                    Sont éligibles les jeunes en situation de handicap de moins de 31 ans pouvant justifier l’un de ces cas :
                </p>
                <ul>
                    <li>Ayant engagés des démarches de reconnaissance du handicap ;</li>
                    <li>Notification de la Maison départementale des personnes handicapées (MDPH)</li>
                    <li>Reconnaissance de la qualité de travailleur handicap - RQTH ;</li>
                    <li>Allocation d’éducation de l’enfant handicap - AEEH ;</li>
                    <li>Bénéficiaire de l'allocation aux adultes handicapés - AAH ;</li>
                    <li>Projet personnalisé de scolarisation ;</li>
                    <li>Notification de taux d’incapacité permanente ;</li>
                    <li>Notification de taux d’invalidité ;</li>
                    <li>Titulaire de la carte «mobilité inclusion» portant la mention «invalidité»</li>
                </ul>

                <h1>Quels sont ses objectifs ?</h1>
                <p>L‘objectif du Service Civique est de vous proposer un nouveau cadre d’engagement, dans lequel vous pouvez gagner en confiance en vous, en compétences et prendre le temps de réfléchir à votre propre avenir, tant citoyen que professionnel. Il doit constituer une étape de vie au cours de laquelle vous pouvez prendre conscience de la diversité de notre société en côtoyant des volontaires, des professionnels, des bénévoles, des citoyens, issus de toutes origines sociales et culturelles.</p>
                
                <h1>Condition</h1>
                <p>Pour valider son contrat d’engagement en Service Civique avec l’organisme d’accueil, il suffit de fournir l’une des pièces administratives suivantes :</p>
                <ul>
                    <li>Une pièce justifiant de votre nationalité française, celle d’un état membre de l’Union européenne ou de l’espace économique européen ;</li>
                    <li>Un titre de séjour régulier en France effectif depuis plus d’un an ;</li>
                    <li>Un titre de séjour régulier en France effectif sans condition de durée si vous possédez le statut d’étudiant étranger, de réfugié ou si 
                    vous êtes bénéficiaire de la protection subsidiaire. Les étrangers possédant une carte de séjour pluriannuelle générale délivrée après un 
                    premier document de séjour sont également éligibles au dispositif.</li>
                </ul>

                <h1>Modalité de l'engagement</h1>
                <p>Une indemnité de 473,04 euros par mois est directement versée au volontaire par l’État, quelle que soit la durée hebdomadaire de la mission.
                    L'organisme d’accueil verse aussi au volontaire une prestation en nature ou en espèce d’un montant de 107,58 euros.
                </p>
                <p>
                    Les jeunes, bénéficiaires ou appartenant à un foyer bénéficiaire du RSA, ou titulaire d'une bourse de l'enseignement supérieur au titre du 5e échelon ou au delà bénéficient d’une majoration d'indemnité de 107,68 euros par mois.
                </p>
                <p>
                L’indemnité de Service Civique est entièrement cumulable avec l’Allocation aux Adultes Handicapés (AAH) et l’Aide au Logement.
                </p>
                <a href='https://www.service-civique.gouv.fr/' target='_blank' rel="noopener noreferrer">Plus d'informations</a>
            </div>
        )
    }
}