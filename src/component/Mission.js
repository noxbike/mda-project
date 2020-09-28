import React, { Component } from 'react';
import './mission.css';

export default class Mission extends Component {
    render(){
        return(
            <div id='mission'>
                <div className='col-12 col-md-8 col-lg-8 '>
                    <h1>Nos missions</h1>
                    <div>
                        <div class="form-group col-md-4 col-lg-4">
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
                    </div>
                </div>
            </div>
        )
    }
}