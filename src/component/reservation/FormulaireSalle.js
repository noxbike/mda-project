import React, { useState } from 'react'
import { DateTimePicker,  MuiPickersUtilsProvider, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import frLocale from "date-fns/locale/fr";
const localhost = require('../config.json');

export default function FormulaireSalle(props) {
    const [ object, setObject ] = useState('Ordinateur')
    const [ number, setNumber ] =useState(1);
    const [ email, setEmail ] = useState(null);
    const [ description, setDescription ] = useState(null)
    const [ nbPersonne, setNbPersonne ] = useState(null)
    const [ association, setAssociation ] = useState(null)
    const [ salle, setSalle ] = useState('Bureau Orchidée')
    const [ startTime, setStartTime ] = useState(new Date())
    const [ endTime, setEndTime ] = useState(startTime)
    const [ error, setError ] = useState(null)
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(email === null || association === null){
            return setError(['red', 'Tout les champs avec un * doivent être rempli']);
        }

        var token = localStorage.getItem('x-xsrf-token');
        fetch(`http://${ localhost.localhost }/api/reservation/`,{
            method:'POST',
            body: JSON.stringify({
                'association': association,
                'email': email,
                'nombrePersonne': nbPersonne,
                'calendarId': salle,
                'description': description,
                'startTime': startTime,
                'endTime': endTime
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

    const addMateriel = (number, object) => {
        let tab;
        if(description === null){
            tab = [];
        }
        else{
            tab = description
        }
        tab.push(number + ' ' + object)
        setDescription(tab);
        setObject('Ordinateur');
        setNumber(1);
    }

    const limitPerson = () => {
        for(let value of props.salle){
            if(value.name === salle){
                return value.nbrPerson;
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className='formulaireReservation pl-0 pr-0 row'>
            <div className='col-12 mb-4'>
                <div>
                    {error &&<p style={{color:`${error[0]}`, fontSize:'0.8em', fontWeight:'700'}}>{error[1]}</p>}
                </div>
                <div className='row mb-4'>
                    <div className='col-6'>
                        <input type='text' className='e-field e-input' onChange={(event) => setAssociation(event.target.value)} value={ association } placeholder="Nom de l'association *"/>
                    </div>
                    <div className='col-6'>
                        <input type='email' className='e-feld e-input' onChange={(event) => setEmail(event.target.value)} value={ email } placeholder='Email *'/>
                    </div>
                </div>
                <div className='row mb-2'>
                        <div className='col-7' >
                            <select style={{outline:'none', border:'none'}} className="e-field e-input" onChange={(event) => {setSalle(event.target.value); setNbPersonne(1)}} value={ salle } id="inlineformCustomSelectPref">
                                    {props.salle.map(item => item.name !== 'Rendez-vous' ?
                                        <option value={item.name}>{item.name}</option> : ''
                                    )}
                            </select>
                        </div>
                        <div className='col-5'>
                            <input type='number' min="1" max={limitPerson()} className='e-field e-input' onChange={(event) => setNbPersonne(event.target.value)} value={ nbPersonne } placeholder="Nbre de personne"/>
                        </div>
                </div>
            </div>
            <div className='row mb-2 ml-auto mr-auto'>
                <div className='col-12 mb-4'>
                    <label>Réservation de matériels :</label>
                </div>
                <div className='col-12' style={{height:'200px'}}>
                    <ul>
                        {description && description.map(item => <li>{item}</li>)}
                    </ul>
                    {!description && <h6 className='text-center'style={{fontWeight:'700'}}>Aucun matériel réserver</h6>}
                </div>
                <div className='col-12 mb-2 row'>
                    <select className='col-6 e-field e-input' onChange={(e) => setObject(e.target.value)} value={object} style={{border:'none', outline:'none'}}>
                        <option value='Ordinateur'>Ordinateur</option>
                        <option value='Sonorisation'>Sonorisation</option>
                        <option value='Chaise'>Chaise</option>
                        <option value='Table'>Table</option>
                        <option value='Tableau'>Tableau</option>
                        <option value='Vidéo projecteur'>Vidéo projecteur</option>
                    </select>
                    <div className='col-4'>
                        <input type='number' min="1" max="10" onChange={(e) => setNumber(e.target.value)} value={number} className='e-field e-input' placeholder="Nombre"/>
                    </div>
                    <div className='col-2'>
                        <a className='btn-addMateriel' onClick={() => addMateriel(number, object) }>Ajouter</a>
                    </div>
                </div>
            </div>
            <div className='row mb-2'>
                <div className='col-6'>
                    <label>Date de début</label>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                        <DateTimePicker value={startTime} format='dd MMM yyyy HH:mm' minutesStep='60'disablePast={true} ampm={false} type='hours' onChange={setStartTime} />
                    </MuiPickersUtilsProvider>
                </div>
                <div className='col-6'>
                        <label>Date de fin</label>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                            <DateTimePicker value={endTime} format='dd MMM yyyy HH:mm' minutesStep='60' disablePast={true} ampm={false} type='hours' onChange={setEndTime} />
                        </MuiPickersUtilsProvider>
                </div>
            </div>
            <div className='col-12 row text-right'>
                <div className='row col-9 text-left justify-content-center align-items-center'>
                </div>
                <button type="submit" className="btn btn-outline-secondary" style={{marginTop:'2%'}} data-toggle="button" aria-pressed="false" autocomplete="off">
                    Confirmer
                </button>
            </div>
        </form>
    )
}