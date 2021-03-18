import React, { useState, useEffect } from 'react';
import Navigation from './sidemenu/Navigation';
const localhost = require('../config.json');

export default function OffreAdmin() {
    const [ Offre, setOffre ] = useState(null)
    const[ data, setData ] = useState([]);
    const [ onglet, setOnglet ] = useState('ajout')

    useEffect(() => {
        fetch(`http://${ localhost.localhost }/api/missions/`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((data) => setData(data.missionFound))
    }, [])
    switch (onglet){
        case 'liste':
            return(
                <div className='col-12 row p-0 m-0'>
                    <Navigation/>
                    <div className='row justify-content-around align-items-center col-10'>
                        {!Offre && <h2>Vous n'avez pas encore ajouter de mission service civique !</h2>}
                    </div>
                </div>
            )
        case 'ajout':
            return(
                <div className='col-12 row p-0 m-0'>
                <Navigation/>
                <div className='row justify-content-around align-items-center col-10'>
                   <div className='row justify-content-around col-8 p-4' style={{background: 'rgba(184, 180, 180, 0.2)', bottom: '0'}}>
                        <div className='col-6 mb-4'>
                            <input type='text'  style={{width:'100%'}} placeholder='Titre'></input>
                        </div>
                        <div className='col-6  mb-4'>
                            <input type='text'  style={{width:'100%'}} placeholder='Lieu'></input>
                        </div>
                        <div className='col-12  mb-4'>
                            <textarea type='text' rows='10' style={{width:'100%'}} placeholder='Description'></textarea>
                        </div>
                        
                        <div className='col-6 mb-4'>
                            <div>
                                <label>Thème</label>
                            </div>
                            <div>
                                <select>
                                    {
                                        data.map(item => <option key={item.id}>{item.missions}</option> )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col-6 mb-4'>
                            <div>
                                <label>Quand ?</label>
                            </div>
                            <div>
                                <input type='date' placeholder='date'></input>
                            </div>
                        </div>
                        <div className='col-6 mb-4'>
                            <div>
                                <label>Combien de postes disponible ?</label>
                            </div>
                            <div>
                                <input type='number' placeholder='1'></input>
                            </div>
                        </div>
                        <div className='col-6 mb-4'>
                            <div>
                                <label>Le lieu de la mission est accessible aux personnes à mobilité réduite ?</label>
                            </div>
                            <div>
                                <select>
                                    <option>Oui</option>
                                    <option>Non</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-6 mb-4'>
                            <div>
                                <label>La mission est accessible aux mineurs dés 16 ans ?</label>
                            </div>
                            <div>
                                <select>
                                    <option>Oui</option>
                                    <option>Non</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-6'></div>
                        <div className='col-lg-10'></div>
                        <div className='col-2'>
                            <button>Ajouter</button>
                        </div>
                   </div>
                </div>
            </div>
            )
    }
}