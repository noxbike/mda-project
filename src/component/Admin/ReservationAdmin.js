import React, { useState } from 'react';
import Navigation from './sidemenu/Navigation';

export default function ReservationAdmin() {
    const [ reservation, setReservation ] = useState(null)
    return (
        <div className='col-12 row p-0 m-0'>
            <Navigation/>
            <div className='col-2'></div>
            <div className='row justify-content-around align-items-center col-10' style={{minHeight:'695px'}}>
               {!reservation && <h2>Aucune réservation en attente de confirmation ! </h2>}
            </div>
        </div>
    )
}