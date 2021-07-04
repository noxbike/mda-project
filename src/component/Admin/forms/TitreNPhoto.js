import React from 'react'
import Control from './Control'
var localhost = require('../../config.json')

export default function TitreNPhoto(props) {

    return (
        <div className='col-12'>
            <div className='col-12 text-center'>
                <div className='col-5 ml-auto mr-auto form__group field'>
                    <input onChange={props.handleChange} value={props.formulaire.titre} name="titre" className='form__field' type='text'></input>
                    <label className='form__label' >Titre</label>
                </div>
                <h3 className='mt-4'>Photo:</h3>
                <div className='col-12 mb-4 row justify-content-around' style={{minHeight:'200px'}}>
                {props.formulaire.photo && <img src={`http://${localhost.localhost}/${props.formulaire.photo}`} alt='vuephoto' height='200px'/> }
                </div>
                <input type='file' onChange={(e) => props.uploadPhoto(e.target.files[0])}></input>
            </div>
            <div className='col-12 text-right mt-4'>
                <Control control={props.control} page={props.page} setPage={props.setPage} submit={props.submit}/>
            </div>
        </div>
    )
}
