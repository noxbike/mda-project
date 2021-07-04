import React, { useState, useEffect } from 'react'
import Video from '../component/contenu/Video';
var localhost = require('../component/config.json');

export default function ToutVideo() {
    const [ video, setVideo ] = useState(null);

    useEffect(() => {
        fetch(`http://${localhost.localhost}/api/video`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setVideo(data.video))
    },[])
    return(
        <div className='col-11 ml-auto mr-auto mt-4 video'>
                {video && 
                    <div className='col-12 col-lg-3'>
                        <Video item={video}/>
                    </div>
                }
                {!video && <h2>Aucune vidéo disponible pour le moment!</h2>}
        </div>
    )
}
