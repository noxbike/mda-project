import React, { useState, useEffect } from 'react';
import '../style/reserver.css';
import Calendrier from '../component/reservation/Calendrier.jsx';
import FormulaireRV from '../component/reservation/FormulaireRV';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
const localhost = require('../component/config.json');

export default function RendezVous () {
    const [ id, setId ] = useState(null)
    const [ association, setAssociation ] = useState('')
    const [ startTime, setStartime ] = useState()
    const [ endTime, setEndTime ] = useState()
    const [ form, setForm ] = useState(false)
    const [ data, setData ] = useState([])
    const [ error, setError ] = useState(null)
    const [ calendarId, setCalendarId ] = useState('amfc7121kcmvf16h7tf8ac7g6g@group.calendar.google.com')

    const displayForm = () => {
        setForm(!form)
    }

    useEffect(() => {
        fetch(`http://${localhost.localhost}/api/calendarId`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setData(data.calendarFound))
    },[])
    
    switch (error) {
        case null:
            return (
                <div id='reserver'>
                    <div className='row col-12 col-xl-10 ml-auto mr-auto pb-4 '>
                        <div className={ `application animate__animated${form ? ' animate__backInLeft' : ' d-none'} row col-12 col-sm-8 col-md-5 col-lg-4` } style={{ marginLeft:'auto', marginRight: 'auto', backgroundColor: 'white' }}>
                            <div className='col-12 text-right'>
                                <FontAwesomeIcon icon={ faTimes } size="2x" className='close-btn' onClick={ () => displayForm() } />
                            </div>
                            <h4 className='col-12 text-center mb-4'>Prendre rendez-vous</h4>
                            <FormulaireRV salle={ data } error={ setError }/>
                        </div>
                        <div style={{backgroundColor: 'white'}} className='sheduler row col-12 col-md-6 col-lg-7 mt-4 ml-auto mr-auto'>
                            <div className='row col-12 align-items-center'>
                                <div className='col-6 col-md-6 p-0 mb-2'>
                                    <h4>Rendez-vous</h4>
                                </div>
                                <div className='col-6 col-md-6 mb-2 text-right'>
                                    <button onClick={ () => displayForm() }>Prendre rendez-vous</button>
                                </div>
                            </div>
                            <Calendrier
                                calendarId={ calendarId }
                            />
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
                            <h3>Rendez-vous enregistré</h3>
                        </div>
                        <p><strong>{error[1]}</strong></p>
                    </div>
                </div>
            )
    }
}