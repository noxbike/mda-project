import React, { useState } from 'react';
import Navigation from './sidemenu/Navigation';

export default function AdherentsAdmin() {
    const [ adherent, setAdherent ] = useState(null)
    return (
        <div className='col-12 row p-0 m-0'>
            <Navigation/>
            <div className='col-2'></div>
            <div className='row justify-content-around align-items-center col-10' style={{minHeight:'695px'}}>
               {!adherent && <h2>Vous n'avez pas d'adhérents !</h2>}
            </div>
        </div>
    )
}