import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DossierPhotopublic from '../component/contenu/DossierPhotopublic'
var localhost = require('../component/config.json')

export default function Gallerie() {
    const [ gallerie, setGallerie ] = useState(null)

    useEffect(() => {
        fetch(`http://${localhost.localhost}/api/gallerie`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setGallerie(data.gallerieFound))
    },[])

    return (
        <div className='col-11 ml-auto'>
            <div className='row col-12 ml-auto mt-4'>
                {gallerie && gallerie.map(item => 
                    <div className='col-12 col-sm-3'>
                        <DossierPhotopublic key={item.id} item={item} />
                    </div>
                )}
            </div>
        </div>
    )
}
