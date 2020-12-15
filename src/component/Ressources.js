import React from 'react'

export default function Ressources() {
    return (
        <div className='pt-4 col-md-10 ml-auto mr-auto'>
            <h2 className='text-center'>Ressources</h2>
            <h5 className='pt-4'><strong>Liens Ressources</strong></h5>
            <hr style={{border: '2px solid #932724'}}/>
            <div className='row ml-auto mr-auto col-12 mb-4' style={{boxShadow: '1px 1px 25px rgba(0,0,0,.2)'}}>
                <div className='col-12 col-md-4 mb-4 mt-4 ml-auto mr-auto row justify-content-center'>
                    <img src='./image/logo-mda.png' alt='logo-mda' width='276px' height='150px'/>
                </div>
                <div className='col-12 col-md-12 col-lg-4 mb-4 mt-4'>
                    <ul style={{listStyle: 'none'}}>
                        <li><a href='http://mda-saintbenoit.re/ressources/Caractère intéressé ou désintéressé de la gestion.pdf' target='__blank'>> Caractère intéressé ou désintéressé de la gestion </a></li>
                        <li><a href='http://mda-saintbenoit.re/ressources/Comment rédiger un dossier de sponsoring.pdf' target='__blank'>> Comment rédiger un dossier de sponsoring</a></li>
                        <li><a href='http://mda-saintbenoit.re/ressources/Critère de non-concurrence.pdf' target='__blank'>> Critère de non-concurrence </a></li>
                        <li><a href='http://mda-saintbenoit.re/ressources/Déclarer son association.pdf' target='__blank'>> Déclarer son association</a></li>
                        <li><a href='http://mda-saintbenoit.re/ressources/Fiche dons aux associations.pdf' target='__blank'>> Fiche dons aux associations</a></li>
                        <li><a href='http://mda-saintbenoit.re/ressources/Publicité des comptes annuels.pdf' target='__blank'>> Publicité des comptes annuels</a></li>
                        <li><a href="http://mda-saintbenoit.re/ressources/Ressources de L'association.pdf" target='__blank'>> Ressources de L'association</a></li>
                    </ul>
                </div>
                <div className='col-12 col-md-12 col-lg-4 mb-4 mt-4'>
                    <ul style={{listStyle: 'none'}}>
                        <li><a href="http://mda-saintbenoit.re/ressources/L'appréciation du caractère lucratif de l'association.pdf" target='__blank'>> L'appréciation du caractère lucratif de l'association</a></li>
                        <li><a href='http://mda-saintbenoit.re/ressources/obligations comptables et financières.pdf' target='__blank'>> Obligations comptables et financières</a></li>
                        <li><a href='http://mda-saintbenoit.re/ressources/Petit guide de survie.pdf' target='__blank'>> Petit guide de survie</a></li>
                        <li><a href="http://mda-saintbenoit.re/ressources/Les modes d'interventions exclusifs du contrat de travail.pdf" target='__blank'>> Les modes d'interventions exclusifs du contrat de travail</a></li>
                        <li><a href="http://mda-saintbenoit.re/ressources/La rémunération des membres et dirigeants d'associations.pdf" target='__blank'>> La rémunération des membres et dirigeants d'associations</a></li>
                        <li><a href="http://mda-saintbenoit.re/ressources/L'appréciation du caractère lucratif de l'association et ses conséquences.pdf" target='__blank'>> L'appréciation du caractère lucratif de l'association et ses conséquences</a></li>
                    </ul>
                </div>
            </div>
            <div className='pt-4 col-12 col-md-6 col-lg-4' style={{boxShadow: '1px 1px 25px rgba(0,0,0,.2)'}}>
                <div className='col-10 ml-auto mr-auto pb-4'>
                    <img src='https://upload.wikimedia.org/wikipedia/fr/thumb/2/2f/Logo_Service_civique.svg/1280px-Logo_Service_civique.svg.png' alt='logo-service-civique' width='100%'/>
                </div>
                <ul className='pb-4' style={{listStyle: 'none'}}>
                    <li><a href='http://mda-saintbenoit.re/ressources/8 PRINCIPES FONDAMENTAUX du SERVICE CIVIQUE.pdf' target='__blank'>> 8 PRINCIPES FONDAMENTAUX DU SERVICE CIVIQUE</a></li>
                    <li><a href='http://mda-saintbenoit.re/ressources/Fiche de besoins  volontaire SCV 2020.pdf' target='__blank'>> FICHE MISSIONS SERVICE CIVIQUE 2020</a></li>
                    <li><a href='http://mda-saintbenoit.re/ressources/FICHE de Mission SC2020.pdf' target='__blank'>> FICHE DE BESOINS VOLONTAIRE SERVICE CIVIQUE</a></li>
                </ul>
            </div>
        </div>
    )
}
