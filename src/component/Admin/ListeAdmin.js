import React, { useState, useEffect } from 'react'
import Navigation from './sidemenu/Navigation';
import { faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from './searchbar/Search';
import axios from 'axios'
var localhost = require('../config.json');

export default function ListeAdmin() {
    const [ email, setEmail ] = useState(null)
    const [ list, setList ] = useState(null)
    const [ scroll, setScroll ] = useState(true)
    const [ formulaire, setFormulaire ] = useState(false)
    
    const changelog = () => {
        if(window.scrollY > 0)
            setScroll(true);
        else
            setScroll(false);
    }

    window.addEventListener('scroll', changelog);

    const supprimer = (email) => {
        fetch(`http://${ localhost.localhost }/api/admin/delete`,{
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'email': email
            })
        })
        .then(res => res.json())
        .then(data => console.log('admin supprimer'))
    }

    useEffect(() => {
        fetch(`http://${ localhost.localhost }/api/admin/liste`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setList(data ? data.adminFound : null))
    },[])

    const ajoutAdmin = (email) => {

        axios.post(`http://${ localhost.localhost }/api/admin/create`, { 'email': email },{
            method: "POST",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(data => setList(data ? data.adminFound : null))
    }

    return (
        <div className='col-12 row p-0 m-0'>
            <div style={{position:'fixed', minHeight:'695px', marginTop:`${scroll ?'0px': '0px'}`,zIndex:'1000'}}>
                <Navigation/>
            </div>
            <div className='col-12 mt-4 text-center'>
                <h2>Liste des Administrateurs</h2>
            </div>
            <div className='col-12 row justify-content-around'>
                <div className='row justify-content-around col-11 ml-auto mt-4'>
                    <Search/>
                    {list && list.map((item, index) => 
                        <div key={ index } className='row col-12 p-0 justify-content-between align-items-center' style={{borderBottom:'1px solid gray', height:'50px', color:'black'}}>
                            <div className='col-8'>
                                <p style={{fontWeight:'400'}}>{item.email}</p>
                            </div>
                            <div className='row justify-content-around col-4'>
                                <div className='row justify-content-around col-6'>
                                    <a onClick={() => supprimer(item.email)}><FontAwesomeIcon icon={faTrash}/></a>
                                </div>
                            </div>
                        </div>
                    )}
                    {!list && <h2>Vous n'avez aucun administrateur</h2>}
                    <div className='col-12 mt-4 text-right'>
                        <button onClick={() => setFormulaire(!formulaire)}>Ajouter</button>
                    </div>
                </div>
                <div className='row p-0 m-0' onClick={() => setFormulaire(!formulaire)} style={{position: 'absolute', height:'100%', width:'100%', backgroundColor:'rgba(0,0,0, 0.5)',minHeight:'695px'}} hidden={!formulaire}>
                </div>
                <div className='col-4 ml-auto mr-auto p-0' style={{ marginBottom:'auto', marginTop:'5%', position:'absolute'}} hidden={!formulaire}>
                    <form className='col-4 ml-auto mr-auto pb-4 p-0' style={{backgroundColor:'white', minWidth:'100%', borderRadius:'10px'}}>
                        <div className='col-12 pt-3 pb-3 text-center' style={{backgroundColor:'rgb(66, 158, 255)', color:'white', borderRadius:'10px 10px 0px 0px', boxShadow:'0px 0px 12px gray'}}>
                            <h2 style={{fontWeight:'700'}}><FontAwesomeIcon icon={faUserPlus} style={{fontSize:'30px'}}/> Ajouter un administrateur</h2>
                        </div>
                        <div className='col-10 ml-auto mr-auto form__group field'>
                            <input type='text' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' className='form__field'/>
                            <label className='form__label' >Email</label>
                        </div>
                        <div className='col-12 mt-4 text-right'>
                            <button onClick={() => ajoutAdmin(email)} style={{background:'rgb(66, 158, 255)', padding:'5px 15px 5px 15px', fontSize:'17px', color:'white', border:'none', outline:'none', fontWeight:'600'}}>Créer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
