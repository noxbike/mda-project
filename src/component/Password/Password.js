import React, { useState } from 'react'
const localhost = require('../config.json');

export default function Password(props) {
    const [ password, setPassword ] = useState('');
    const [ confirmpassword, setConfirmPassword ] = useState('');
    const [ error, setError ] = useState('');

    const CompareMdp = () => {
        if(password !== confirmpassword){
            return setError('Les mots de passes ne correspondent pas');
        }
        else{
            fetch(`http://${localhost.localhost}/api/users/password/`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    'email': props.email,
                    'password': password
                })
            })
            .then(data => data.json())
            .then(data => data.erreur ? setError(data.erreur): props.next())
        }
    }
    return (
        <div className='col-12 row flex-column justify-content-center align-item-center'>
            <div id='ChangePassword' className='col-4 ml-auto mr-auto'>
                <h2>Changez votre mot de passe</h2>
                <div className="form__group field">
                    <input type="password" className="form__field" placeholder="password" name="password" id='password' onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="password" className="form__label">Mot de passe</label>
                </div>
                <div className="form__group field">
                    <input type="password" className="form__field" placeholder="confirmpassword" name="confirmpassword" id='confirmpassword' onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <label htmlFor="confirmpassword" className="form__label">Confirmer votre mot de passe</label>
                    <p style={{color: 'red', fontWeight:'700'}}>{error}</p>
                </div>
                <div>
                    <button onClick={() => CompareMdp() }>Changer</button>
                </div>
            </div>
        </div>
    )
}
