import React, { useState } from 'react'
import '../style/postuler.css';
import serviceCivique from '../image/service civique-logo.jpg';
import Uploader from '../component/Uploader';
const localhost = require('../component/config.json');

export default function Postulez() {
    const [ email, setEmail ] = useState(null);
    const [ theme, setTheme ] = useState('Solidarité');
    const [ error, setError ] = useState([])
    const [ file, setfile ] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://${ localhost.localhost }/api/serviceCivique/postuler`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'theme': theme,
                'cv': file[0],
                'lMotiv': file[1]
            })
        })
        .then(res => res.json())
        .then(data => data.message ? reset() : setError(['red', data.erreur]))
    }

    const reset = () => {
        setEmail('');
        setTheme('Solidarité');
        setfile([]);
        setError(['green', 'Votre candidature a bien été envoyer'])
    }

    return (
        <div id='postuler' className="container">
                <div className="row centered-form" style={{justifyContent: 'center'}}>
                    <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-1 col-md-offset-1">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className='logo-mda'>
                                    <img className='mb-4' src={ serviceCivique } alt='logo-serviceCivique' />
                                </div>
                            </div>
                            <div className="panel-body">
                                <p className='ml-auto mr-auto' style={{color:`${error[0]}`, fontWeight:'700'}}>{error[1]}</p>
                                <form onSubmit={ handleSubmit } encType='multipart/form-data'>
                                    <div className="form-group">
                                        <input onChange={ (e)=> setEmail( e.target.value ) } value={email}type="email" name="email" id="email" className="form-control input-sm" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Le domaine qui m'intéresse le plus</label>
                                        <select onChange={ (e)=> setTheme( e.target.value ) } value={theme} className="form-control" id="exampleFormControlSelect1">
                                            <option>Solidarité</option>
                                            <option>Environnement</option>
                                            <option>Culture et loisirs</option>
                                            <option>Mémoire et citoyenneté</option>
                                            <option>Education pour tous</option>
                                            <option>Sport</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p>Insérez votre Cv et votre Lettre de Motivation</p>
                                    </div>
                                    <Uploader 
                                        setfile={ setfile } 
                                        file={ file }
                                        url={ `http://${ localhost.localhost }/api/public/file` }
                                        delete={ `http://${ localhost.localhost }/api/file/delete/` }
                                        limit={ 2 }
                                    />
                                    <input type="submit" value="Postuler" className="btn btn-info btn-block" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}