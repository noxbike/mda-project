import React, { useState, useEffect } from 'react'
import { faExclamationCircle, faPlusSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Control from './Control'

export default function Mission(props) {
    const [ inputMission, setInputMission ] = useState(null)
    const [ mission, setMission ] = useState(null)

    useEffect(() => {
        if(props.formulaire){
            if(props.formulaire.id){
                setMission(JSON.parse(props.formulaire.mission))
            }
            else{
                setMission(props.formulaire.mission)
            }
        }
    },[])

    const AjoutMission = (newmission) => {
        if(props.formulaire.id){
            let tab = mission;
            tab.push(newmission);
            setMission(tab);
        }
        else{
            props.AjoutMission(newmission)
        }
        setInputMission('')
    }

    return (
        <div className='col-12'>
            <div className='col-12 p-0 mt-4'>
                <div className='col-12'>
                    <h5><strong>Votre(s) Mission(s)</strong></h5>
                </div>
                <div className='col-12'>
                    <div className='row col-12 justify-content-around align-items-center' style={{minHeight:'200px'}}>
                        {props.formulaire.mission &&
                            <ul>
                                {mission && mission.map(item => <li>{item}</li>)}
                            </ul>
                        }
                        {!props.formulaire.mission && <p className='text-center'style={{color:'gray', fontWeight:'550'}}><FontAwesomeIcon icon={faExclamationCircle}/> Aucune mission</p>}
                    </div>
                    <form className='row col-12 align-items-end'>
                        <div className='col-5 form__group field'>
                            <input className='form__field' placeholder='Mission...' type='text' onChange={(e) => setInputMission(e.target.value)} value={inputMission}/>
                            <label className='form__label'>Missions...</label>
                        </div>
                        <div className='col-1'>
                            <a type='submit' onClick={() => AjoutMission(inputMission)}><FontAwesomeIcon icon={faPlusSquare} style={{fontSize:'40px', color:'gray'}}/></a>
                        </div>
                    </form>
                </div>
            </div>
            <div className='col-12 text-right mt-4'>
                <Control control={props.control}  page={props.page} setPage={props.setPage} submit={props.submit} />
            </div>
        </div>
    )
}
