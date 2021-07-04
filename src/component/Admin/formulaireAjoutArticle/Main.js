import React, { useState } from 'react'
import Contenu from '../forms/Contenu'
import TitreNPhoto from '../forms/TitreNPhoto'
import axios from 'axios'
var localhost = require('../../config.json')

export default function Main(props) {
    const uploadPhoto = (photo) => {
        let data = new FormData();
        data.append( 'file', photo )
        axios.post(`http://${localhost.localhost}/api/articles/upload` , data,{
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
        })
        .then(res => props.setFormulaire(prevState => ({
            ...prevState,
            "photo": `articles/${res.data.file}`
        })))
    }

    const submit = () => {
        axios.post(`http://${localhost.localhost}/api/articles/create`, props.formulaire,{
            method: "POST",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(res => props.pushArticle(res.data))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        props.setFormulaire(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleChangeContenu = (e) => {
        props.setFormulaire(prevState => ({
            ...prevState,
            "contenu": e
        }))
    }

    const updateArticle = () => {
        axios.put(`http://${localhost.localhost}/api/article/update`, props.formulaire,{
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

   switch (props.page){
        case 2:
            return(<Contenu control={3} handleChangeContenu={handleChangeContenu} formulaire={props.formulaire} setPage={props.setPage} submit={props.formulaire.id ? updateArticle : submit} />)
        default:
            return(<TitreNPhoto control={1} handleChange={handleChange} formulaire={props.formulaire} page={props.page} setPage={props.setPage} uploadPhoto={uploadPhoto}/>)
   }
}
