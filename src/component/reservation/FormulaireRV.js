import React, { useState } from 'react'
import { DateTimePicker,  MuiPickersUtilsProvider, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import frLocale from "date-fns/locale/fr";
const localhost = require('../config.json');

export default function FormulaireRV(props) {
    const [ email, setEmail ] = useState(null);
    const [ description, setDescription ] = useState(null);
    const [ telephone, setTelephone ] = useState(null);
    const [ association, setAssociation ] = useState(null);
    const [ startTime, setStartTime ] = useState(new Date());
    const [ error, setError ] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === null || association === null){
            return setError(['red','Tout les champs avec un * doivent être rempli'])
        }
        var endTime = new Date(startTime);
        endTime.setHours(endTime.getHours()+1)
        var token = localStorage.getItem('x-xsrf-token');
        fetch(`http://${ localhost.localhost }/api/calendar/rendez-vous`,{
            method:'POST',
            body: JSON.stringify({
                'association': association,
                'email': email,
                'telephone': telephone,
                'description': description,
                'startTime': startTime,
                'endTime': endTime,
            }),
            headers:{
                'Content-Type': 'application/json',
                'x-xsrf-token': token
            },
            credentials: 'include'
        })
        .then(res => res.json())
        .then((result) => {
            result.message ? props.error(['#64d134', result.message]):setError(['red', result.erreur]);
        })
    }

    return (
        <form onSubmit={handleSubmit} className='formulaireReservation pl-0 pr-0 row'>
            <div className='col-12 mb-4'>
                <div>
                    {error && <p style={{color:`${error[0]}`, fontSize:'0.8em', fontWeight:'700'}}>{error[1]}</p>}
                </div>
                <div className='row mb-4'>
                    <div className='col-6'>
                        <input type='text' className='e-field e-input' onChange={(event) => setAssociation(event.target.value)} value={ association } placeholder="Nom de l'association *"/>
                    </div>
                    <div className='col-6'>
                        <input type='email' className='e-feld e-input' onChange={(event) => setEmail(event.target.value)} value={ email } placeholder='Email *'/>
                    </div>
                </div>
                <div className='col-6 mb-4'>
                    <div className='col-12 mb-4'>
                        <input type='text' className='e-feld e-input' onChange={(event) => setTelephone(event.target.value)} value={ telephone } placeholder='Téléphone'/>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-12 mb-4'>
                        <input type='text' className='e-feld e-input' onChange={(event) => setDescription(event.target.value)} value={ description } placeholder='Sujet'/>
                    </div>
                </div>
            </div>
            <div className='row col-12 mb-2 justify-content-around'>
                <label>Date du rendez-vous</label>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                    <DateTimePicker value={startTime} format='dd MMM yyyy HH:mm' minutesStep='60'disablePast={true} ampm={false} type='hours' onChange={setStartTime} />
                </MuiPickersUtilsProvider>
            </div>
            <div className='col-12 text-right'>
                <button type="submit" className="btn btn-outline-secondary" style={{marginTop:'2%'}} data-toggle="button" aria-pressed="false" autocomplete="off">
                    Confirmer
                </button>
            </div>
        </form>
    )
}