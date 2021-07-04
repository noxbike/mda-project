import React, { useState, useEffect } from 'react'
import validator from 'validator';
var localhost = require('../config.json');

export default function EmailInfo(props) {
    const [ error, setError ] = useState(null);

    useEffect(() => {
        if(props.access === null){
            let code = '';
            for(let i = 0; i < 6; i++){
                code += Math.floor(Math.random() * Math.floor(10))
            }
            props.setAccess(code);
        }
    },[])

    const verifyMail = () => {
        let test = validator.isEmail(props.email);
        if(!test){
            setError('Email invalide ou vide');
        }
        else{
            fetch(`http://${localhost.localhost}/api/users/getEmail/`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    'email': props.email,
                    'code': props.access
                })
            })
            .then(data => data.json())
            .then(data => data.erreur ? setError(data.erreur): props.next())
        }
    }

    return (
        <div className='col-12 row flex-column justify-content-center align-item-center'>
            <div id='ChangePassword' className='col-4 ml-auto mr-auto'>
                <h2>Entrez votre email</h2>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Email" name="Email" id='Email' onChange={(e) => props.setEmail(e.target.value)} value={props.email} required />
                    <label htmlFor="Email" className="form__label">Email</label>
                    <p style={{color: 'red', fontWeight:'700'}}>{error}</p>
                </div>
                <div>
                    <button onClick={() => verifyMail() }>Valider</button>
                </div>
            </div>
        </div>
    )
}
