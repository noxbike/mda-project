import React, { useState, useEffect } from 'react';
import SkeletonElement from './skeleton/SkeletonElement';
import SkeletonVideo from './skeleton/skeletonVideo';
import Video from './contenu/Video';
import parse from 'html-react-parser'
import localhost from './config.json';
import { Link } from 'react-router-dom';
import cutText from './utils/cutText'

export default function LastVideo (){
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
        <div className='video'>
            
            <div style={{marginRight:'auto', marginLeft:'auto'}}>
                {video &&
                    <div>
                        <div className="embed-responsive embed-responsive-16by9">
                            {parse(video.url)}
                        </div>
                        <div className='mt-4'>
                            <h5>{cutText(video.titre, 42)}</h5>
                            <p>{video.auteur}</p>
                        </div>
                    </div>
                }
                {!video && <SkeletonVideo />}
                
                {!video ? <div className='autre-video mt-4'><SkeletonElement type='title' /></div> : <div className='autre-video'><Link to='/video'><span>+ Autres vidéos</span></Link></div>}
                
            </div>
        </div>
    )
}