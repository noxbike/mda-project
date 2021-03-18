import React, {useState, useEffect } from 'react';
import Navigation from './sidemenu/Navigation';
import Moment from 'moment';
import SkeletonEvent from '../skeleton/SkeletonEvent';
import './admin.css';
const localhost = require('../config.json');
Moment.locale('fr');

export default function EvenementAdmin() {

    const [ agenda, setAgenda ] = useState(null);

    const time = (date) => {
        date= new Date(date);
        date = Moment(date).format("Do MMM");
        return date;
    }

    useEffect(() => {
        fetch(`http://${ localhost.localhost }/api/agenda`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setAgenda(data.agendaFound))
    },[])

    return (
        <div className='col-12 row p-0 m-0'>
            <Navigation/>
            <div className='row justify-content-around align-items-center col-7 col-lg-10 ml-auto mr-auto mt-4'>
            {agenda && agenda.map( item =>
                <div key={item.id} className='col-12 col-lg-2 mb-4 row cart-admin'>
                    <div className='row m-0 p-0' style={{backgroundImage:`url(http://${localhost.localhost}/${item.photo})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'20em', width:'100%'}} ></div>
                    <div className='face2 p-0 row col-12 justify-content-around'>
                        <div className='col-4 text-center' style={{fontWeight:'bolder',fontSize:'1.1em', backgroundColor:'#932824c2', color:'white'}}>
                            <p>{time(item.du)}</p>
                        </div>
                        <div className='col-8 text-center'>
                            <h5>{item.titre}</h5>
                        </div>
                    </div>
                </div>
                )}
                {!agenda && [1,2].map( item => 
                    <SkeletonEvent key={item}/>
                )}
            </div>
        </div>
    )
}