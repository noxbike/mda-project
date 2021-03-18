import React, { useState, useEffect } from 'react';
import Navigation from './sidemenu/Navigation';
import SkeletonElement from '../skeleton/SkeletonElement';
import SkeletonVideo from '../skeleton/skeletonVideo';
import parse from 'html-react-parser';
import ToutVideo from '../contenu/ToutVideo';
const localhost = require('../config.json');

export default function VideoAdmin() {
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

    return (
        <div className='col-12 row p-0 m-0'>
            <Navigation/>
            <div className='row justify-content-around align-items-center col-7 col-lg-10 ml-auto mr-auto'>
                <ToutVideo/>
            </div>
        </div>
    )
}