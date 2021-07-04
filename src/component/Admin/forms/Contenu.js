import React, { useState } from 'react'
import TextEditor from '../../TextEditor'
import Control from './Control'

export default function Contenu(props) {

    return (
        <div className='col-12'>
            <div className='col-12 text-center'>
                <h3>Contenu</h3>
                <div style={{overflow:'auto',minHeight:'300px', maxHeight:'301px'}}>
                    <TextEditor contenu={props.formulaire.contenu} setContenu={props.handleChangeContenu}/>
                </div>
            </div>
            <div className='col-12 text-right mt-4'>
                <Control control={props.control} setPage={props.setPage} page={props.page} submit={props.submit}/>
            </div>
        </div>
    )
}
