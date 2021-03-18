import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';

export default function MaSemaineSC() {
    const [ date, setDate ] = useState([
        {day:'Lundi', matin:{debut:'', fin:''}, midi:{debut:'', fin:''}},
        {day:'Mardi', matin:{debut:'', fin:''}, midi:{debut:'', fin:''}},
        {day:'Mercredi', matin:{debut:'', fin:''}, midi:{debut:'', fin:''}},
        {day:'Jeudi', matin:{debut:'', fin:''}, midi:{debut:'', fin:''}},
        {day:'Vendredi', matin:{debut:'', fin:''}, midi:{debut:'', fin:''}},
        {day:'Samedi', matin:{debut:'', fin:''}, midi:{debut:'', fin:''}},
        {day:'Dimanche', matin:{debut:'', fin:''}, midi:{debut:'', fin:''}},
    ])
    const [ newFormulaire, setNewFormulaire ] = useState('')

    const formulaireHoraire = 
            <div className='col-lg-6 mb-4'>
                <div className='pb-4 pt-4' style={{boxShadow: '0px 0px 32px rgb(167, 167, 167)', border: '1px solid rgb(167, 167, 167)' , borderRadius:'10px'}}>
                    <div className='row justify-content-around mb-4'>
                        <div className='col-12 col-lg-2'>
                            <p><strong>Matin</strong></p>
                        </div>
                        <div className='col-6 col-lg-4'>
                            <p><strong>Début</strong></p>
                            <div className='col-10 col-lg-9 ml-auto mr-auto'>
                                <input type='time' value="08:00" class="form-control timepicker"></input>
                            </div>
                        </div>
                        <div className='col-6 col-lg-4'>
                            <p><strong>Fin</strong></p>
                            <div className='col-10 col-lg-9 ml-auto mr-auto'>
                                <input type='time' value="12:00" class="form-control timepicker"></input>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-around mb-4'>
                        <div className='col-12 col-lg-2'>
                            <p><strong>Aprés-Midi</strong></p>
                        </div>
                        <div className='col-6 col-lg-4'>
                            <p><strong>Début</strong></p>
                            <div className='col-10 col-lg-9 ml-auto mr-auto'>
                                <input type='time' value="13:00" class="form-control timepicker"></input>
                            </div>
                        </div>
                        <div className='col-6 col-lg-4'>
                            <p><strong>Fin</strong></p>
                            <div className='col-10 col-lg-9 ml-auto mr-auto'>
                                <input type='time' value="17:00" class="form-control timepicker"></input>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center justify-content-start p-4'>
                        {date.map(item =>
                            <div className='row align-items-center justify-content-start col-4 col-lg-3'>
                                <input type='checkbox'></input>
                                <label className='ml-1 pt-2'><strong>{item.day}</strong></label>
                            </div>
                        )}
                    </div>
                </div>
            </div>;
            
    return (
        <div className='masemainesc col-12'>
            <div className='row col-lg-8 ml-auto mr-auto text-center mt-4 pt-4'>
                <div className='col-lg-12 text-left' style={{fontSize:'1.5em'}}>
                    <Link to='/service-civique/dashboard'><FontAwesomeIcon icon={faLongArrowAltLeft} /></Link>
                </div>
                <div className='col-lg-6 mb-4'>
                    <h5>Du 01/01/2021 Au 07/01/2021</h5>
                </div>
                <div className='col-lg-6 mb-4'>
                    <h1>Ma semaine</h1>
                </div>
                {formulaireHoraire}
                <div className='col-lg-6'></div>
                {newFormulaire}
                <div className='col-lg-12 text-left mb-4'>
                    <h6 onClick={() => setNewFormulaire(formulaireHoraire)}><strong>+Autre horaire</strong></h6>
                </div>
                <div className='col-12 col-lg-6 mb-4'>
                    <textarea className='col-12' rows='5' placeholder='Commentaire...'></textarea>
                </div>
                <div className='col-lg-6 mb-4'></div>
                <div className='row col-lg-12 mb-4'>
                    <div className='col-lg-9'></div>
                    <div className='col-lg-3'>
                        <div className='button'>
                            <a>Valider</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
