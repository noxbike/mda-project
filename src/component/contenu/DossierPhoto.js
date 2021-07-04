import React from 'react'
import { Link } from 'react-router-dom'
var localhost = require('../config.json')

export default function DossierPhoto(props) {
    return (
        <div>
            <Link to={`/admin/gallerie/${props.item.name}`} className='row justify-content-around'>
                <div className='col-12'>
                    <img src={`http://${localhost.localhost}/gallerie/${props.item.photo}`} alt={props.item.name} height='206px' width='100%'/>
                </div>
                <div className='col-12 text-center'>
                    <p><strong>{props.item.name}</strong></p>
                </div>
            </Link>
        </div>
    )
}
