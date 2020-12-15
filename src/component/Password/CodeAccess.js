import React, { useState } from 'react'

export default function CodeAccess(props) {
    const [ input, setInput] = useState(null);
    const [ error, setError ] = useState(null);

    const verifyCode = (e) => {
        e.preventDefault();
        if(input === '' || input === null){
            setError('Code secret vide')
        }
        else{
            if(input === props.access){
                props.next();
            }
            else{
                setError('code secret invalide');
            }
        }
    }

    return (
        <div className='col-12 row flex-column justify-content-center align-item-center'>
            <form onSubmit={verifyCode} id='ChangePassword' className='col-4 ml-auto mr-auto'>
                <h2>Vérification</h2>
                <p>Vous avez reçu un email avec un code entrez le ci-dessous</p>
                <div className="form__group field mb-4" >
                    <input type="input" className="form__field" placeholder="Code-secret" name="Code-secret" id='Code-secret' onChange={(e) => setInput(e.target.value)} />
                    <label htmlFor="Code-secret" className="form__label">Code secret</label>
                    <p style={{color: 'red', fontWeight:'700'}}>{error}</p>
                </div>
                <div>
                    <button type='submit'>Valider</button>
                </div>
            </form>
        </div>
    )
}
