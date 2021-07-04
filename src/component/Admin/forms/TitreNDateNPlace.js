import React from 'react'
import { DateTimePicker,  MuiPickersUtilsProvider, } from '@material-ui/pickers';
import Control from './Control'
import DateFnsUtils from '@date-io/date-fns';
import frLocale from "date-fns/locale/fr";

export default function TitreNDateNPlace(props) {

    return (
        <div className='col-12'>
            <div className='row justify-content-around align-content-around ml-auto mr-auto'  style={{minHeight:'300px'}}>
                <div className='mt-4 col-lg-5 form__group field'>
                    <input className='form__field' type='text' onChange={props.handleChange} name='titre' value={props.formulaire.titre} placeholder='Titre'></input>
                    <label className='form__label'>Titre</label>
                </div>
                <div className='mt-4 col-lg-5 form__group field'>
                    <input className='form__field' type='text' onChange={props.handleChange} name='ou' value={props.formulaire.ou} placeholder='Où'></input>
                    <label className='form__label'>Où</label>
                </div>
                <div className='mt-4 col-lg-5 form__group field'>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                        <DateTimePicker className='form__field' value={props.formulaire.du && props.formulaire.du} format='dd MMM yyyy' minutesStep='60'disablePast={true} ampm={false} type='hours' onChange={(e) => props.handleChangehour('du', e)} />
                    </MuiPickersUtilsProvider>
                    <label className='form__label'>Date de début</label>
                </div>
                <div className='mt-4 col-lg-5 form__group field'>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                        <DateTimePicker className='form__field' value={props.formulaire.au && props.formulaire.au} format='dd MMM yyyy' minutesStep='60'disablePast={true} ampm={false} type='hours' onChange={(e) => props.handleChangehour('au', e)} />
                    </MuiPickersUtilsProvider>
                    <label className='form__label'>Date de fin</label>
                </div>
            </div>
            <div className='col-12 text-right mt-4'>
                <Control control={props.control} page={props.page} setPage={props.setPage} submit={props.submit}/>
            </div>
        </div>
    )
}
