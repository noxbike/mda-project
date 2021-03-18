import React, {useState} from 'react';
import Navigation from './sidemenu/Navigation';

export default function RendezVousAdmin() {
    const [ rendezVous, setRendezVous ] = useState(null)
    return (
        <div className='col-12 row p-0 m-0'>
            <Navigation/>
            <div className='col-2'></div>
            <div className='row justify-content-around align-items-center col-7 col-lg-10 ml-auto mr-auto' style={{minHeight:'695px'}}>
               {!rendezVous && <h2>Aucun rendez-vous en attente de confirmation!</h2>}
            </div>
        </div>
    )
}