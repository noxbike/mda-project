import React from 'react'
import Control from './Control'

export default function SocialNMap(props) {
    return (
        <div className='col-12'>
            <div className='row justify-content-between col-12 m-0'>
                <div className='form__group field col-5 mt-4'>
                    <input className='form__field' type='text' placeholder="Facebook" name='facebook' onChange={props.pushSocial} value={props.formulaire.facebook}/>
                    <label className='form__label'>Facebook</label>
                </div>
                <div className='form__group field col-5 mt-4'>
                    <input className='form__field' type='text' placeholder="Twitter" name='twitter' onChange={props.pushSocial} value={props.formulaire.twitter}/>
                    <label className='form__label'>Twitter</label>
                </div>
                <div className='form__group field col-5 mt-4'>
                    <input className='form__field' type='text' placeholder="Site Web" name='site' onChange={props.pushSocial} value={props.formulaire.site}/>
                    <label className='form__label'>Site Web</label>
                </div>
                <div className='form__group field col-5 mt-4'>
                    <input className='form__field' type='text' placeholder="Instagram" name='instagram' onChange={props.pushSocial} value={props.formulaire.instagram}/>
                    <label className='form__label'>Instagram</label>
                </div>
                <div className='form__group field col-12 mt-4'>
                    <label className='form__label'>Map</label>
                    <textarea className='form__field' type='text' rows='6' placeholder="Map" name='map' onChange={props.handleChange} value={props.formulaire.map}/>
                </div>
            </div>
            <div className='col-12 text-right mt-4'>
                <Control control={props.control}  page={props.page} setPage={props.setPage} submit={props.submit} />
            </div>
        </div>
    )
}
