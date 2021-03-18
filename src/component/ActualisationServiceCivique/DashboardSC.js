import React from 'react'
import './service-civique.css';
import { Link } from 'react-router-dom';
import img from '../../image/service-civique.jpg';

export default function DashboardSC() {
    return (
        <div className='col-12'>
            <div className='dashboard-service-civique row ml-auto mr-auto col-lg-8 mt-4 pt-4'>
                <div className='col-lg-9 mb-4'>
                    <img src={img} width='190px' alt='service-civique-logo' />
                </div>
                <div className='row col-lg-3 mb-4 justify-content-around align-items-center'>
                    <div>
                        <p>Nom</p>
                        <p>Prénom</p>
                        <p>Statut</p>
                    </div>
                    <div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7csvPWMdfAHEAnhIRTdJKCK5SPK4cHfskow&usqp=CAU'  width='150px' alt='photo-profile' />
                    </div>
                </div>
                <div className='col-lg-5 mt-4 mb-4 row align-items-center text-center'>
                    <div className='ml-auto mr-auto col-12 col-lg-6'>
                        <div className='button mb-4'>
                            <Link to='/service-civique/ma-semaine'>Ma semaine</Link>
                        </div>
                        <div className='button mb-4'>
                            <Link to='/service-civique/calendrier-missions'>Mon calendrier de mission</Link>
                        </div>
                        <div className='button mb-4'>
                            <Link to='/service-civique/mes-bilans'>Mes Bilans</Link>
                        </div>
                        <div className='button mb-4'>
                            <Link to='/service-civique/mes-partenaire'>Mes partenaires</Link>
                        </div>
                    </div>
                </div>
                <div className='carousel col-lg-7 mt-4 mb-4'>
                    <img src='https://www.service-civique.gouv.fr/uploads/introduction/coverHP_jeunes.jpg' alt='carousel' width='100%' />
                </div>
                <div className='col-lg-12 mb-4 text-right'>
                        <a>A propos</a>
                </div>
            </div>
        </div>
    )
}
