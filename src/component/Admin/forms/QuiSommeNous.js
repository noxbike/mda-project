import React from 'react'
import Control from './Control'

export default function QuiSommeNous(props) {
    return (
        <div className='col-12'>
            <div className='mt-4'>
                <h5><strong>Qui sommes-nous ?</strong></h5>
                <div className='form__group field col-12 mt-4'>
                    <textarea className='form__field' rows='5' type='text' onChange={props.handleChange} name='histoire' value={props.formulaire.histoire}/>
                </div>
            </div>
            <div className='col-12 text-right mt-4'>
                <Control control={props.control}  page={props.page} setPage={props.setPage} submit={props.submit} />
            </div>
        </div>
    )
}
