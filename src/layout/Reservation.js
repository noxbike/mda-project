import React, { useState, useEffect } from 'react';
import '../style/reserver.css';
import Calendrier from '../component/reservation/Calendrier.jsx';
import FormulaireSalle from '../component/reservation/FormulaireSalle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
const localhost = require('../component/config.json');

export default function Reservation () {
    const [ form, setForm ] = useState(false)
    const [ data, setData ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ calendarId, setCalendarId ] = useState('um2j9o1gl2a2i1cbcj145u8olk@group.calendar.google.com')

    const displayForm = () => {
        setForm(!form)
    }

    useEffect(() => {
        fetch(`http://${localhost.localhost}/api/calendarId`,{
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {data.calendarFound && setData(data.calendarFound)})
    },[])
    
    switch (error) {
        case null:
            return (
                <div id='reserver'>
                    <div className='row col-12 col-xl-10 ml-auto mr-auto pb-4 '>
                        <div className={ `application animate__animated${form ? ' animate__backInLeft' : ' d-none'} row col-12 col-sm-8 col-md-5 col-lg-4 p-0` } style={{ marginLeft:'auto', marginRight: 'auto', backgroundColor: 'white' }}>
                            <div className='row justify-content-between align-items-center col-12 mb-4' style={{background:'rgb(68, 201, 2)',height:'70px', color:'white', borderRadius:'10px 10px 0px 0px'}}>
                                <h4 className='text-left'>Réserver votre salle</h4>
                                <FontAwesomeIcon icon={ faTimes } size="1x" className='close-btn' onClick={ () => displayForm() } />
                            </div>
                            {data && <FormulaireSalle salle={ data } error={ setError }/>}
                        </div>
                        <div style={{backgroundColor: 'white'}} className='sheduler row col-12 col-md-6 col-lg-7 mt-4 ml-auto p-0 mr-auto'>
                            <div className='row col-12 align-items-center ml-auto mr-auto' style={{backgroundColor:'rgb(68, 201, 2)', height:'70px', color:'white', borderRadius:'10px 10px 0px 0px'}}>
                                <div className='col-6 col-md-6 p-0 mb-2'>
                                    <select className="custom-select col-12 col-md-12 col-lg-8" onChange={(event) => setCalendarId(event.target.value)} value={ calendarId } id="inlineformCustomSelectPref">
                                        {
                                            data && data.map((item, index )=> item.name !== 'Rendez-vous' ?
                                            <option key={ index } value={ item.calendarId }>{ item.name }</option> : ''
                                            )
                                        }
                                    </select>
                                </div>
                                <div className='col-6 col-md-6 mb-2 text-right'>
                                    <button style={{backgroundColor:'rgb(43, 148, 71)'}} onClick={ () => displayForm() }>Réserver</button>
                                </div>
                            </div>
                            <div className='col-12 mb-4'>
                                    <Calendrier
                                        calendarId={ calendarId }
                                        calendarData={ data }
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            )
            break;
        default:
            return (
                <div className='col-12 row align-items-center justify-content-center' style={{ height:'600px' }}>
                    <div className='text-center col-md-7 ml-auto mr-auto' style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                        <div className='row col-5 ml-auto mr-auto align-item-center' style={{ color: error[0] }}>
                            <FontAwesomeIcon icon={faCheck} style={{ fontSize:'1.8em', marginRight: '15px' }}/>
                            <h3>Réservation enregistré</h3>
                        </div>
                        <p><strong>{error[1]}</strong></p>
                    </div>
                </div>
            )
    }
}