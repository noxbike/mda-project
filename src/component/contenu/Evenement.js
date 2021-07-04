import React from 'react'
import { Link } from 'react-router-dom';
import time from '../utils/timeFormat'
import cutText from '../utils/cutText'
const localhost = require('../config.json');

export default function Evenement(props) {
    return (
        <div id='events' key={props.item.id} className='mb-4'>
            <Link className='row ml-auto mr-auto cart' to={`/agenda/${props.item.url}`}>
                <div style={{backgroundImage:`url(http://${localhost.localhost}/${props.item.photo})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'80%', width:'100%'}} ></div>
                <div className='face2 row ml-auto mr-auto justify-content-between'>
                    <div className='text-center d-flex align-items-center justify-content-center' style={{fontWeight:'bolder',fontSize:'1.1em', width:'30%', backgroundColor:'#932824c2', color:'white'}}>
                        <p>{ time(props.item.du) }</p>
                    </div>
                    <div className='text-center' style={{width:'60%'}}>
                        <h5>{ cutText(props.item.titre, 20) }</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}
