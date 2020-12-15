import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faCheck } from '@fortawesome/free-solid-svg-icons'
import Moment from 'moment';
Moment.locale('fr')
const localhost = require('../config.json');

export default function FormAdmin() {
    const [ data, setData ] = useState([])
    let { id } = useParams();

    const time = (date) => {
        date= new Date(date);
        date = Moment(date).format("dddd Do MMM YYYY HH:mm");
        return date;
    }

    useEffect(() => {
        fetch(`http://${localhost.localhost}/api/calendar/data/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setData(data.reservationFound))
    }, [])

    const response = (res, method) => {
        fetch(`http://${localhost.localhost}/api/${res}/calendar/${id}`,{
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    switch (data.statut){
        case 1:
            return (
                <div className='col-12 row align-items-center justify-content-center' style={{height:'600px'}}>
                    <div className='text-center col-md-5 ml-auto mr-auto' style={{marginTop: 'auto', marginBottom: 'auto'}}>
                        <div className='row col-9 ml-auto mr-auto align-item-center' style={{color: '#64d134'}}>
                            <FontAwesomeIcon icon={faCheck} style={{fontSize:'1.8em', marginRight: '15px'}}/>
                            <h3>La réservation à déjà été Accepter !</h3>
                        </div>
                        <p><strong>Vous avez déjà accepté la réservation pour l'annulée vous devriez le supprimer dans votre agenda</strong></p>
                        <p><strong>Et le signalé à cette addresse email : {data.email}</strong></p>
                    </div>
                </div>
            )
        break;
        default:
            return (
                <div className='col-12 row ml-auto mr-auto justify-content-center' style={{height: '700px'}}>
                    <div className='col-md-8 col-lg-5 ml-auto mr-auto row' style={{boxShadow: '0px 0px 32px gray', border:'2px solid gray', height: '400px', marginTop:'auto', marginBottom:'auto'}}>
                        <div className='col-12 text-center mt-4 pb-4'>
                        {data.calendarId === 'Rendez-vous'? <h3>Rendez-vous</h3> :<h3>Réservation</h3>}
                        </div>
                        <div className='col-sm-6'>
                            <p><strong>Association:</strong> {data.association}</p>
                            {data.calendarId === 'Rendez-vous'? 'Rendez-vous' :<p><strong>Salle:</strong> {data.calendarId}</p>}
                            {data.calendarId === 'Rendez-vous'? '' :<p><strong>Nombre de personne:</strong>{data.nbrPerson}</p>}
                        </div>
                        <div className='col-sm-6'>
                            <p><strong>{data.calendarId === 'Rendez-vous'? 'Sujet: ' : 'Matériel demandé:'}</strong> {data.description}</p>
                            <p><strong>Date de début:</strong> {time(data.start)}h</p>
                            {data.calendarId === 'Rendez-vous'? '' :<p><strong>Date de fin:</strong> {time(data.end)}h</p>}
                        </div>
                        <div className='ml-auto mr-auto col-12 col-md-10 col-lg-10 row justity-content-around'>
                            <div className='col-4'>
                                <a onClick={() => response('accepted', 'POST')} style={{backgroundColor:'#64d134', color:'white',padding: '5px 20px 5px 20px', fontSize:'1.3em',cursor:'pointer'}}>Ajouter</a>
                            </div>
                            <div className='col-4'>
                                <a onClick={() => response('rejected', 'DELETE')} style={{backgroundColor:'red', color:'white',padding: '5px 20px 5px 20px', fontSize:'1.3em',cursor:'pointer'}}>Rejeter</a>
                            </div>
                            {data.calendarId ==='Rendez-vous' ? '' :
                                <div className='col-4'>
                                    <a onClick={() => response('pay', 'POST')} style={{backgroundColor:'blue', color: 'white', padding: '5px 20px 5px 20px', fontSize:'1.3em',cursor:'pointer'}}>Paiement</a>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            )
    }
}
