import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import ScrollToTop from '../ScrollToTop';
var localhost = require('../config.json');

export default function Confirmation(props) {
    const [ message, setMessage ] = useState("Votre demande d'adhésion a bien été enregistré. Un email vous sera envoyé pour les prochaines étapes à suivre")
    const verify = () => {
        fetch(`http://${localhost.localhost}/api/nouvelle-adhesion`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...props.value })
        })
        .then(data => data.json())
        .then(data => setMessage(data.success))
    }

    return (
        <div  className='bloc ml-auto mr-auto col-md-8' style={{fontSize:'1em', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
            <ScrollToTop/>
            { message ?
            <div>
                <div className='row' style={{color: '#64d134'}}>
                    <FontAwesomeIcon icon={faCheck} style={{fontSize:'1.5em', marginRight:'10px'}}/>
                    <h3>Vos information ont bien été envoyé</h3>
                </div>
                <p><strong>{message}</strong></p>
             </div>:
            <div> 
                <h2 className='text-center'>
                    Envoi
                </h2>
                <p className='text-center'>
                    Veuillez bien vérifier vos informations avant d'envoyer
                </p>
                <div className='row paiement-button'>
                    <button className='pr-2 pl-2' onClick={ () => props.previous() }>Précédent</button>
                    <button className='pr-2 pl-2' onClick={ verify }>Envoyer</button>
                </div>
            </div>
            }
        </div>
    )
}
