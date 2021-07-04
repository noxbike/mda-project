import React, {useState, useEffect } from 'react';
import Navigation from './sidemenu/Navigation';
import SkeletonEvent from '../skeleton/SkeletonEvent';
import Main from './formulaireAjoutEvenement/Main'
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import Evenement from '../contenu/Evenement';
import { render } from 'react-dom';
const localhost = require('../config.json');

export default function EvenementAdmin() {

    const [ agenda, setAgenda ] = useState(null)
    const [ scroll, setScroll ] = useState(false)
    const [ show, setShow ] = useState(false)
    const [ page, setPage ] = useState(1)
    const [ formulaire, setFormulaire ] = useState({"titre":'', "ou":'', "du":new Date(), "au":null, "photo":'', "contenu":'', "auteur":'MDA Saint-Benoît'})
    const [ charge, setCharge ] = useState(null)
    
    const changelog = () => {
        if(window.scrollY > 0)
            setScroll(true);
        else
            setScroll(false);
    }

    window.addEventListener('scroll', changelog);

    useEffect(() => {
       render()
    },[])

    const render = () => {
        fetch(`http://${ localhost.localhost }/api/agendas`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setAgenda(data.agendaFound))
        setShow(false)
    }

    const deleteEvent = (titre) => {
        fetch(`http://${ localhost.localhost }/api/agenda/delete/${titre}`,{
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => render())
    }

    const pushEvent = (data) => {
        let tab = agenda ? agenda : []
        tab.splice(0, 0, data)
        setShow(false)
        setAgenda(tab);
    }

    const afficherFormulaire = (item) =>{
        setPage(1)
        setFormulaire(item)
        setShow(true)
    }

    const cacherFormulaire = () => {
        setPage(1)
        setFormulaire({"titre":'', "ou":'', "du":new Date(), "au":null, "photo":'', "contenu":'', "auteur":'MDA Saint-Benoît'})
        setShow(false)
    }

    return (
        <div className='col-12 row p-0 m-0'>
            <div id='sidebar-admin' style={{position:'fixed', minHeight:'695px', marginTop:`${scroll ?'65px': '0px'}`,zIndex:'1000'}}>
                <Navigation/>
            </div>
            <div className='col-12 row justify-content-around'>
                <div className='row col-11 col-lg-10 ml-auto mt-4'>
                    {agenda && agenda.map( item =>
                        <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
                            <div className='edition-event ml-auto mr-auto col-6 p-0 row justify-content-between align-items-center' style={{background:`rgb(46, 43, 43)`, color:'white', height:'30px', width: '100%'}}>
                                <div className='col-2'>
                                    <FontAwesomeIcon icon={faEdit} onClick={() => afficherFormulaire(item)}/>
                                </div>
                                <div className='col-2'>
                                    <FontAwesomeIcon icon={faTimes} onClick={() => deleteEvent(item.titre)}/>
                                </div>
                            </div>
                            <Evenement key={item.id} item={item} />
                        </div>
                    )}
                    {!agenda && [1,2].map( item => <SkeletonEvent key={item}/> )}
                </div>
                <div className='col-12 col-lg-12 text-right'>
                    <button onClick={() => afficherFormulaire(formulaire)}>Ajouter</button>
                </div>
                <div className='row p-0 m-0' onClick={() => cacherFormulaire()} style={{position: 'absolute', height:'100%', width:'100%', backgroundColor:'rgba(0,0,0, 0.5)',minHeight:'695px'}} hidden={!show}>
                </div>
                <div className='col-4 p-0' style={{ marginBottom:'auto', marginTop:'5%', position:'absolute'}} hidden={!show}>
                    <div className='col-4 ml-auto mr-auto pb-4 p-0' style={{backgroundColor:'white', minWidth:'100%', borderRadius:'10px'}}>
                        <div className='col-12 pt-3 pb-3 text-center' style={{backgroundColor:'rgb(66, 158, 255)', color:'white', borderRadius:'10px 10px 0px 0px', boxShadow:'0px 0px 12px gray'}}>
                            <h2 style={{fontWeight:'700'}}><FontAwesomeIcon icon={faCalendar} style={{fontSize:'30px'}}/> Ajouter un évènement</h2>
                        </div>
                        <Main render={render} page={page} setPage={setPage} setFormulaire={setFormulaire} formulaire={formulaire} pushEvent={pushEvent}/>
                    </div>
                </div>
            </div>
        </div>
    )
}