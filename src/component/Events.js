import React, { useState, useEffect } from 'react';
import '../style/event.css';
import SkeletonElement from './skeleton/SkeletonElement';
import SkeletonEvent from './skeleton/SkeletonEvent';
import { Link } from 'react-router-dom';
import Evenement from './contenu/Evenement';
const localhost = require('./config.json');

export default function Events(){

    const [agenda, setAgenda] = useState(null)

    useEffect(()=>{
        fetch(`http://${ localhost.localhost }/api/agenda`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setAgenda(data.agendaFound))
    },[])

    return (
        <div id='events' className='col-12 ml-auto mr-auto row d-flex justify-content-around'>
            {agenda && agenda.map( item =>
                <Evenement key={item.id} item={item} />
            )}
            {!agenda && [1,2].map( item => 
                <SkeletonEvent key={item}/>
            )}

            <div className='autre-evenement col-12'>
                {agenda ? <Link to='/agenda'><span>+ Tous les événements</span></Link> : <SkeletonElement type='title' />}
            </div>
        </div>
    )
}