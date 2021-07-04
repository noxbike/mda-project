import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Control from '../forms/Control'
var localhost = require('../../config.json')

export default function Formulaire(props) {

    const submit = () => {
        axios.post(`http://${localhost.localhost}/api/video/create`, props.formulaire,{
            method: "POST",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(res => props.pushVideo(res.data))
    }

    const updateVideo = () => {
        axios.put(`http://${localhost.localhost}/api/video/update`, props.formulaire,{
            method: "PUT",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(res => props.render())
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        props.setFormulaire(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className='col-10 row ml-auto mr-auto justify-content-between'>
            <div className='col-5 mt-4 form__group field'>
                <input onChange={handleChange} name='titre' value={props.formulaire.titre} className='form__field' type='text' placeholder='Titre'></input>
                <label className='form__label'>Titre</label>
            </div>
            <div className='col-5 mt-4 form__group field'>
                <input onChange={handleChange} name='auteur' value={props.formulaire.auteur} className='form__field' type='text' placeholder='Auteur'></input>
                <label className='form__label'>Auteur</label>
            </div>
            <div className='col-12 mt-4 form__group field'>
                <label className='form__label'>Vidéo</label>
                <textarea onChange={handleChange} name='url' value={props.formulaire.url} className='form__field' type='text' rows='6'></textarea>
            </div>
            <div className='col-12 text-right mt-4'>
                <Control submit={props.formulaire.id ? updateVideo : submit}/>
            </div>
        </div>
    )
}
