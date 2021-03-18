import React, { useState } from 'react';
import Navigation from './sidemenu/Navigation';

export default function ServiceCiviqueAdmin() {
    const [ serviceCivique, setServiceCivique ] = useState(null)
    return (
        <div className='col-12 row p-0 m-0'>
            <Navigation/>
            <div className='col-2'></div>
            <div className='row justify-content-around align-items-center col-10' style={{minHeight:'695px'}}>
               {!serviceCivique && <h2>Aucun service civique inscrit pour le moment !</h2>}
            </div>
        </div>
    )
}