import React from 'react';
import Gallerie from '../Gallerie';
import Navigation from './sidemenu/Navigation';

export default function GallerieAdmin() {
    return (
        <div className='row col-12 row p-0 m-0'>
            <Navigation/>
            <div className='col-2'></div>
            <div className='row justify-content-around align-items-center col-10' style={{top:'0'}}>
               <Gallerie/>
            </div>
        </div>
    )
}