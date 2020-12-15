import React, { useState } from 'react'
import CodeAccess from './CodeAccess';
import EmailInfo from './EmailInfo';
import Password from './Password';
import { Redirect } from 'react-router-dom';

export default function Main() {
    const [ step, setStep ] = useState(1);
    const [ email, setEmail ] = useState(null);
    const [ access, setAccess ] = useState(null);

    const page = () => {
        if(step > 0 && step < 5){
            setStep(step + 1);
        }
    }
    
    switch (step){
        case 4:
            return(
                <Redirect to='/login' />
            )
        case 2:
            return(
                <CodeAccess next={ page } access={ access } />
            )
        case 3:
            return(
                <Password next={ page } email={ email } />
            )
        default:
            return(
                <EmailInfo setAccess={ setAccess } access={ access } email={ email } setEmail={ setEmail } next={ page } />
            )
    }
}