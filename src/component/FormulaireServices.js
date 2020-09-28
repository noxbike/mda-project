import React, { Component } from 'react';
import './reserver.css';
import Calendrier from './Calendrier';

export default class FormulaireServices extends Component {
    render(){
        return(
            <div id='reserver'>
                <div>
                    <form  className='col-12 col-md-4 col-lg-4'>
                        <div class="form-group row col-sm-12">
                            <div class="col-sm-12">
                                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Nom de l'association" />
                            </div>
                        </div>
                        <div class="form-group row col-sm-12">
                            <div class="col-sm-12">
                                <input type="number" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Nombre de personne" />
                            </div>
                        </div>
                        <div class="form-group row col-sm-12">
                            <div className='col-sm-12'>
                                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                    <option selected>Réserver une salle...</option>
                                    <option value="1">Bureau</option>
                                    <option value="2">Salle de réunion</option>
                                    <option value="3">Salle d'activité</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row col-sm-12">
                            <div className='col-sm-12'>
                            <label>Réservation de matériels :</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="ordinateur" />
                                    <label class="form-check-label" for="ordinateur">
                                            Ordinateur
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="ordinateur" />
                                    <label class="form-check-label" for="ordinateur">
                                            Vidéo projecteur
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row col-sm-12">
                            <Calendrier/>
                        </div>
                        <div class="form-group row col-sm-12">
                            <button type="button" class="btn btn-primary" style={{marginTop:'2%'}} data-toggle="button" aria-pressed="false" autocomplete="off">
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}