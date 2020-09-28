import React, { Component } from 'react';
import './postuler.css';
import logoMda from './logo/logo mda.png';
import serviceCivique from './logo/service civique-logo.jpg';

export default class Postulez extends Component{
    render(){
        return(
            <div id='postuler' class="container">
                <div class="row centered-form">
                <div class="col-xs-12 col-sm-9 col-md-9 col-sm-offset-1 col-md-offset-1">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                                <div>
                                    <img className='mb-4' src={ serviceCivique } alt='logo-serviceCivique' />
                                </div>
                                </div>
                                <div class="panel-body">
                                <form>
                                    <div class="form-group">
                                        <input type="email" name="email" id="email" class="form-control input-sm" placeholder="Email" />
                                    </div>

                                    <div class="row">
                                        <div class="col-xs-6 col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <input type="password" name="password" id="password" class="form-control input-sm" placeholder="Mot de passe" />
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <input type="password" name="password_confirmation" id="password_confirmation" class="form-control input-sm" placeholder="Confirmer votre mot de passe" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Le domaine qui m'intéresse le plus</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Solidarité</option>
                                            <option>Environnement</option>
                                            <option>Culture et loisirs</option>
                                            <option>Mémoire et citoyenneté</option>
                                            <option>Education pour tous</option>
                                            <option>Santé</option>
                                            <option>Intervention d'urgence en cas de crise</option>
                                            <option>Sport</option>
                                            <option>Développement international et aide humanitaire</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlFile1">Ajouter votre CV</label>
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlFile1">Ajouter votre lettre de motivation</label>
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                    
                                    <input type="submit" value="Postuler" class="btn btn-info btn-block" />
                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}