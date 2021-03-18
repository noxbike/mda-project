import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Moment from 'moment';
import 'moment/locale/fr';
import '../../style/event.css';
Moment.locale('fr');
var localhost = require('../config.json');

export default function ToutEvenement() {
    const [ agenda, setAgenda ] = useState(null)

    useEffect(() => {
        fetch(`http://${ localhost.localhost }/api/agenda`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setAgenda(data.agendaFound))
    }, [])

    const time = (date) => {
        date= new Date(date);
        date = Moment(date).format("Do MMM");
        return date;
    }

    return (
        <div className='col-12 row mt-4 justify-content-center'>
            <div className='col-8 row justify-content-around'>
                {agenda && agenda.map( item =>
                    <Link to={`/agenda/${item.url}`} key={item.id} className='col-12 col-lg-3 mb-4 row cart-admin'>
                        <div className='row m-0 p-0' style={{backgroundImage:`url(http://${localhost.localhost}/${item.photo})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'24em', width:'100%'}} ></div>
                        <div className='face2 p-0 row col-12 justify-content-around'>
                            <div className='col-4 text-center' style={{fontWeight:'bolder',fontSize:'1.1em', backgroundColor:'#932824c2', color:'white'}}>
                                <p>{time(item.du)}</p>
                            </div>
                            <div className='col-8 text-center'>
                                <h5>{item.titre}</h5>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}
