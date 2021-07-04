import React, { useState, useEffect } from 'react'
import Navigation from './sidemenu/Navigation'
import { faTrash, faCheck, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import time from '../utils/timeFormat'
var localhost = require('../config.json')

export default function ReservationAdmin() {
    const [ reservation, setReservation ] = useState(null)
    const [ message, setMessage ] = useState(null)

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
        .then(data => {data.calendarFound && setReservation(data.calendarFound)})
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

    const payer = (id) => {
        axios.post(`http://${localhost.localhost}/api/pay/calendar/${id}`, null,{
            method: "POST",
            mode:'no-cors',
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(res => res.data.message ? setMessage({color:'green', message: 'Demande de paiement envoyé!'}): null)
        
        render()
    }

    const supprimer = (id) => {
        fetch(`http://${ localhost.localhost }/api/rejected/calendar/${id}`,{
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        
        render()
    }

    return (
        <div className='col-12 row p-0 m-0'>
            <Navigation/>
            <div className='ml-auto col-11' style={{minHeight:'695px'}}>
                <div>
                    <h2 className='text-center mt-4'>Demande de réservation</h2>
                </div>
                {message && <p className='text-center' style={{color:message.color}}>{message.message}</p>}
                <div className='mt-4'>
                    {reservation && reservation.map(item => item.calendarId !== "Rendez-vous" &&
                        <div key={ item.id } className='row ml-auto mr-auto col-10 p-0 justify-content-between' style={{borderBottom:'1px solid gray', height:'50px', color:'black'}}>
                            <div className='row justify-content-between col-8'>
                                <p style={{fontWeight:'400'}}>{item.association}</p>
                                <p>{item.calendarId}</p>
                                <p>{time(item.start, false, true)}</p>
                                <p>{time(item.end, false, true)}</p>
                            </div>
                            <div className='row justify-content-around col-4'>
                                <div className='row justify-content-end col-4'>
                                    <a onClick={() => confirmer(item.id)}><FontAwesomeIcon icon={faCheck}/></a>
                                </div>
                                <div className='row justify-content-end col-4'>
                                    <a onClick={() => payer(item.id)}><FontAwesomeIcon icon={faMoneyCheck}/></a>
                                </div>
                                <div className='row justify-content-end col-4'>
                                    <a onClick={() => supprimer(item.id)}><FontAwesomeIcon icon={faTrash}/></a>
                                </div>
                            </div>
                        </div>
                    )}
                    {!reservation && <h2 className='text-center'>Aucune réservation en attente de confirmation ! </h2>}
                </div>
            </div>
        </div>
    )
}