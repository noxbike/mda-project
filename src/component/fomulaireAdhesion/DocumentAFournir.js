import React, { useState } from 'react'
import ScrollToTop from '../ScrollToTop';
import Uploader from '../Uploader';
var localhost = require('../config.json');

export default function DocumentAFournir(props) {
    const [ error, setError ] = useState(null)
    const verify = () => {
        if(props.value.length === 5){
            props.next()
        }
        else{
            setError('Il manque quelques fichiers')
        }
    }
    return (
        <div>
            <ScrollToTop/>
            <div className='row col-lg-8 ml-auto mr-auto justify-content-around align-items-center mb-4 p-0'>
                <div className='col-12 text-center'><p style={{color:'red'}}>{error}</p></div>
                <div>
                    <h4>Documents à fournir</h4>
                    <ul>
                        <li>Copie des statuts</li>
                        <li>Attestation d'assurance</li>
                        <li>Copie de parution au Journal Officiel</li>
                        <li>Récépissé de dernière déclaration à la préfecture</li>
                        <li>P.V. dernière Assemblée Générale</li>
                    </ul>
                </div>
                <div>
                    <Uploader 
                    setfile={props.setter.setFile} 
                    file={props.value} 
                    url={ `http://${ localhost.localhost }/api/private/file` }
                    delete={`http://${ localhost.localhost }/api/file/delete/`} 
                    limit={5} />
                </div>
            </div>
            <div className='col-lg-10 row justify-content-end'>
                <button onClick={ () => props.previous() }>Précédent</button>
                <button onClick={ verify }>Confirmer</button>
            </div>
        </div>
    )
}
