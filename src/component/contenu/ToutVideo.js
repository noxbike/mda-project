import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser';
var localhost = require('../config.json');

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
        <div className='col-12 mt-4 video'>
            
            <div className='col-12 col-lg-8' style={{marginRight:'auto', marginLeft:'auto'}}>
                {video && 
                <div className='col-8 ml-auto mr-auto'>
                    <div className="embed-responsive embed-responsive-16by9">
                        {parse(video.url)}
                    </div>
                    <div className='mt-4'>
                        <h5>{video.titre}</h5>
                        <p>{video.auteur}</p>
                    </div>
                </div>
                }
                {!video && <h2>Aucune vidéo disponible pour le moment!</h2>}
            </div>
        </div>
    )
}
