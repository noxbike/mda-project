import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './service-civique.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

export default function CalendrierMissions() {
    const [mission, setMission] = useState(null)
    return (
        <div className='calendriermission col-12'>
            <div className='pt-4 mt-4 col-lg-8 ml-auto mr-auto' style={{height: '600px'}}>
                <div className='col-lg-12 text-left' style={{fontSize:'1.5em'}}>
                    <Link to='/service-civique/dashboard'><FontAwesomeIcon icon={faLongArrowAltLeft} /></Link>
                </div>
                <div className='text-right'>
                    <h4>Calendrier de Mission</h4>
                </div>
                <div className='pt-4 pb-4'>
                    <div className='col-lg-5  p-0 m-0 ml-auto mr-auto' style={{border:'1px solid green',borderRadius:'10px', height:'30px'}}>
                        <div className='text-right p-1 m-0' style={{color: 'white', height: '100%',width:'20%',borderRadius:'10px', backgroundColor:'green'}}>20%</div>
                    </div>
                </div>
                <div>
                    <h4>Mes missions</h4>
                    {!mission && <h5 className='text-center p-4'>Aucune missions</h5>}
                </div>
                <div className='row col-12' style={{position:'absolute', bottom: '0'}}>
                    <div className='col-7 col-lg-6 mb-4'>
                        <select className='col-12 col-lg-8'>
                            <option>Formation Civique et Citoyenne (FCC)</option>
                            <option>Formation au Premier Secours (PSC1)</option>
                            <option>Congés (C)</option>
                            <option>Entretien avec le Tuteur (T)</option>
                            <option>Journée de regroupement de volontaires (JRV)</option>
                            <option>Temp fort de Mission</option>
                        </select>
                    </div>
                    <div className=' col-4 col-lg-3 mb-4'>
                        <input type='date' />
                    </div>
                    <div className='ml-auto mr-auto pb-4 col-6 col-lg-2'>
                        <div className='text-center button'>
                            <a>Ajouter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
