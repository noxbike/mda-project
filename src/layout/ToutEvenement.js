import React, { useState, useEffect } from 'react'
import '../style/event.css';
import Evenement from '../component/contenu/Evenement';
var localhost = require('../component/config.json');

export default function ToutEvenement() {
    const [ agenda, setAgenda ] = useState(null)

    useEffect(() => {
        fetch(`http://${ localhost.localhost }/api/agenda`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setAgenda(data.agendaFound))
    }, [])

    return (
        <div className='col-12 ml-auto mr-auto mt-4 row d-flex justify-content-around'>
            <div id='events' className='col-8 ml-auto mr-auto row'>
                {agenda && agenda.map( item =>
                    <div className='col-4'>
                        <Evenement key={item.id} item={item} />
                    </div>
                )}
            </div>
        </div>
    )
}