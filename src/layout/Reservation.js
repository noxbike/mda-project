import React, { useState, useEffect } from 'react';
import '../style/reserver.css';
import Calendrier from '../component/reservation/Calendrier.jsx';
import FormulaireSalle from '../component/reservation/FormulaireSalle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import imagine from '../image/background-maison-mda.jpg'
const localhost = require('../component/config.json');

export default function Reservation () {
    const [ form, setForm ] = useState(false)
    const [ data, setData ] = useState([])
    const [ error, setError ] = useState(null)
    const [ calendarId, setCalendarId ] = useState('um2j9o1gl2a2i1cbcj145u8olk@group.calendar.google.com')

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
                <div id='reserver' style={{backgroundImage:`url(${imagine})`, backgroundSize:'cover'}}>
                    <div className='row col-12 col-xl-10 ml-auto mr-auto pb-4 '>
                        <div className={ `application animate__animated${form ? ' animate__backInLeft' : ' d-none'} row col-12 col-sm-8 col-md-5 col-lg-4` } style={{ marginLeft:'auto', marginRight: 'auto', backgroundColor: 'white' }}>
                            <div className='col-12 text-right'>
                                <FontAwesomeIcon icon={ faTimes } size="2x" className='close-btn' onClick={ () => displayForm() } />
                            </div>
                            <h4 className='col-12 text-center mb-4'>Réserver votre salle</h4>
                            <FormulaireSalle salle={ data } error={ setError }/>
                        </div>
                        <div style={{backgroundColor: 'white'}} className='sheduler row col-12 col-md-6 col-lg-7 mt-4 ml-auto mr-auto'>
                            <div className='row col-12 align-items-center'>
                                <div className='col-6 col-md-6 p-0 mb-2'>
                                    <select className="custom-select col-12 col-md-12 col-lg-8" onChange={(event) => setCalendarId(event.target.value)} value={ calendarId } id="inlineformCustomSelectPref">
                                        {
                                            data.map(item => item.name !== 'Rendez-vous' ?
                                            <option value={ item.calendarId }>{ item.name }</option> : ''
                                            )
                                        }
                                    </select>
                                </div>
                                <div className='col-6 col-md-6 mb-2 text-right'>
                                    <button onClick={ () => displayForm() }>Réserver</button>
                                </div>
                            </div>
                            <Calendrier
                                calendarId={ calendarId }
                                calendarData={ data }
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
                            <h3>Réservation enregistré</h3>
                        </div>
                        <p><strong>{error[1]}</strong></p>
                    </div>
                </div>
            )
    }
}