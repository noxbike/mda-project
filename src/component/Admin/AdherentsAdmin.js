import { faInfo, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Search from './searchbar/Search';
import Navigation from './sidemenu/Navigation';
var localhost = require('../config.json')

export default function AdherentsAdmin() {
    const [ adherent, setAdherent ] = useState(null);

    useEffect(()=>{
        fetch(`http://${ localhost.localhost }/api/association/list`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {data.associationFound && setAdherent(data.associationFound)})
    },[])

    const createPage = (name) => {

        axios.post(`http://${ localhost.localhost }/api/association/accepter/${name}`,{
            method: "POST",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(data => data)
    }

    return (
        <div className='col-12 row p-0 m-0'>
            <div style={{position:'absolute', minHeight:'695px'}}>
                <Navigation/>
            </div>
            <div className='row justify-content-around col-12' style={{maxHeight:'695px'}}>
                <div className='col-12 mt-4 text-center'>
                    <h2>Liste des adhérents</h2>
                </div>
                <div className='col-9'>
                    <Search/>
                    <div>
                    {adherent && adherent.map(item => 
                        <div className='row col-12 justify-content-between align-items-center' style={{borderBottom:'1px solid gray', height:'50px', color:'black'}}>
                            <div className='col-8'>
                                <h4 style={{fontWeight:'550'}}>{item.nomAssociation}</h4>
                            </div>
                            <div className='row justify-content-end col-4'>
                                {!item.page && 
                                    <div className='col-2' style={{cursor:'pointer'}}>
                                        <a onClick={() => createPage(item.nomAssociation)}><FontAwesomeIcon icon={faUserPlus}/></a>
                                    </div>
                                }
                                <div className='col-2'>
                                    <a href='#'><FontAwesomeIcon icon={faInfo}/></a>
                                </div>
                            </div>
                        </div>)}
                    </div>
                    {!adherent && <h2 className='text-center'>Vous n'avez pas d'adhérents !</h2>}
                </div>
            </div>
        </div>
    )
}