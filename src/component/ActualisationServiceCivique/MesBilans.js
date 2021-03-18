import React from 'react'
import { Link } from 'react-router-dom'
import './service-civique.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

export default function MesBilans() {
    return (
        <div className='mesbilans col-12'>
            <div className='row col-lg-8 pt-4 mt-4 ml-auto mr-auto'>
                <div className='text-left' style={{fontSize:'1.5em'}}>
                    <Link to='/service-civique/dashboard'><FontAwesomeIcon icon={faLongArrowAltLeft} /></Link>
                </div>
                <div className='text-center col-lg-12'>
                    <h1>Mes bilans</h1>
                </div>
                <div className='col-lg-5 mt-4 mb-4 row align-items-center text-center'>
                    <div className='col-12 col-lg-6 ml-auto mr-auto'>
                        <div className='button mb-4'>
                            <Link to='/service-civique/recapitulatif-mensuel'>Récapitulatif Mensuel</Link>
                        </div>
                        <div className='button mb-4'>
                            <Link to='/service-civique/bilan-integration'>Bilan d'intégration</Link>
                        </div>
                        <div className='button mb-4'>
                            <Link to='/service-civique/bilan-a-mi-parcours'>Bilan à mi-parcours</Link>
                        </div>
                        <div className='button mb-4'>
                            <Link to='/service-civique/bilan-nominatif'>Bilan nominatif</Link>
                        </div>
                    </div>
                </div>
                <div className='carousel col-lg-7 mt-4 mb-4'>
                    <img src='https://www.service-civique.gouv.fr/uploads/introduction/coverHP_jeunes.jpg' alt='carousel' width='100%' />
                    <div className='mt-4'>
                        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}
