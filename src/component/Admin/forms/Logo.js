import React, { useState } from 'react'
import axios from 'axios'
import Control from './Control'
var localhost = require('../../config.json')

export default function Logo(props) {

    return (
        <div className='col-12'>
            <h4 className='text-center'>Logo de l'association</h4>
            <div className='col-12 mb-4 row justify-content-around' style={{minHeight:'200px'}}>
                {props.formulaire.logo && <img src={`http://${localhost.localhost}/association/logo/${props.formulaire.logo}`} alt='vuephoto' height='200px'/> }
            </div>
            <div className='col-12 row justify-content-center'>
                <input type='file' onChange={(e) => props.uploadLogo(e.target.files[0])}></input>
            </div>
            <div className='col-12 text-right mt-4'>
                <Control control={props.control} page={props.page} setPage={props.setPage} submit={props.submit} />
            </div>
        </div>
    )
}
