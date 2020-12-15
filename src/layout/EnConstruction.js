import React from 'react';
import LogoMda from '../image/logo-mda.png';

export default function EnConstruction() {
    return (
        <div className='text-center ml-auto mr-auto' style={{width:'100%',height:'500px', borderRadius:'5px', backgroundImage: 'url(./image/test-background.jpg)', backgroundSize:'cover', color:'white', fontSize:'1.5em', fontWeight:'700'}}>
            <div className='pt-4'>
                <img className='mb-4' src={ LogoMda } alt='logo-mda' width='20%'/>
                <h3>Page en construction</h3>
                <p>Cette page est en construction elle sera bientôt disponible</p>
            </div>
        </div>
    )
}
