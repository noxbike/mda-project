import React, { useState, useEffect } from 'react';
import Navigation from './sidemenu/Navigation';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import time from '../utils/timeFormat'
import { render } from 'react-dom';
var localhost = require('../config.json')

export default function RendezVousAdmin() {
    const [ rendezVous, setRendezVous ] = useState(null)

    useEffect(() => {
        render()
    },[])

    const render = () => {
        fetch(`http://${localhost.localhost}/api/request/calendar/`,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {data.calendarFound && setRendezVous(data.calendarFound)})
    }

    const confirmer = (id) => {
        axios.post(`http://${localhost.localhost}/api/accepted/calendar/${id}`, null,{
            method: "POST",
            mode:'no-cors',
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(data => render())
    }

    const supprimer = (id) => {
        fetch(`http://${ localhost.localhost }/api/rejected/calendar/${id}`,{
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(data => render())
    }

    return (
        <div className='col-12 row p-0 m-0'>
            <Navigation/>
            <div className='ml-auto col-11' style={{minHeight:'695px'}}>
                <div>
                    <h2 className='text-center mt-4'>Demande de Rendez-Vous</h2>
                </div>
                <div className='mt-4'>
                    {rendezVous && rendezVous.map(item => item.calendarId === 'Rendez-vous' &&
                        <div key={ item.id } className='row ml-auto mr-auto col-10 p-0 justify-content-between' style={{borderBottom:'1px solid gray', height:'50px', color:'black'}}>
                            <div className='row justify-content-between col-8'>
                                <p style={{fontWeight:'400'}}>{item.association}</p>
                                <p>{item.telephone}</p>
                                <p>{time(item.start, false, true)}</p>
                                <p>{time(item.end, false, true)}</p>
                            </div>
                            <div className='row justify-content-around col-4'>
                            <div className='row justify-content-end col-6'>
                                    <a onClick={() => confirmer(item.id)}><FontAwesomeIcon icon={faCheck}/></a>
                                </div>
                                <div className='row justify-content-end col-6'>
                                    <a onClick={() => supprimer(item.id)}><FontAwesomeIcon icon={faTrash}/></a>
                                </div>
                            </div>
                        </div>
                    )}
                    {!rendezVous && <h2 className='text-center'>Aucun rendez-vous en attente de confirmation!</h2>}
                </div>
            </div>
        </div>
    )
}