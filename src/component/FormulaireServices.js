import React, { Component } from 'react';

export default class FormulaireServices extends Component {
    render(){
        return(
            <div>
                <form>
                    <div class="form-group row col-sm-4">
                        <div class="col-sm-10">
                            <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Nom de l'association" />
                        </div>
                    </div>
                    <div class="form-group row col-sm-4">
                        <div class="col-sm-10">
                            <input type="number" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Nombre de personne" />
                        </div>
                    </div>
                    <div class="form-group row col-sm-4">
                        <div className='col-sm-10'>
                            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Réserver une salle...</option>
                                <option value="1">Bureau</option>
                                <option value="2">Salle de réunion</option>
                                <option value="3">Salle d'activité</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row col-sm-4">
                        <div className='col-sm-10'>
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
                    <div class="form-group row col-sm-4">
                    <iframe src="https://calendar.google.com/calendar/embed?src=kj4e2eupd8losdflviuni3ktco%40group.calendar.google.com&ctz=Indian%2FReunion" style={{border: '0'}} width="1000" height="600" frameborder="0" scrolling="no"></iframe>
                    </div>
                    <button type="button" class="btn btn-primary" style={{marginTop:'2%'}} data-toggle="button" aria-pressed="false" autocomplete="off">
                        Envoyer
                    </button>
                </form>
            </div>

        )
    }
}