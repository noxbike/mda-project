import React, { useState, useEffect } from 'react';
import '../style/mission.css';
const localhost = require('../component/config.json');

function Mission() {

    const [ data, setData ] = useState([]);
    const[ theme, setTheme ] = useState('');

    useEffect(() => {
        fetch(`http://${ localhost.localhost }/api/missions/`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((data) => setData(data.missionFound))
    }, [])

    return(
        <div id='mission'>
            <div className='col-12 col-md-8 col-lg-8 '>
                <h1>Nos missions</h1>
                <div>
                    <div className="form-group col-md-4 col-lg-4">
                        <select onChange= {(e) => setTheme(e.target.value)} className="form-control" id="exampleFormControlSelect1">
                            <option>Tout</option>
                            {
                                data.map(item => <option key={item.id}>{item.missions}</option> )
                            }
                        </select>
                    </div>
                </div>
                <div style={{height:'70px'}}>
                    {
                        data.map(item => item.missions === theme ? <div><h4>Intitulé de la mission</h4><div className='row pl-3'><p className='mr-4' key={item.id}>{item.intitule}</p><a href={item.lien}>Plus d'info</a></div></div> : null )
                    }
                </div>
                <div className="card-deck mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">title mission</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <div style={{textAlign: 'right'}}>
                                <button className='postuler'>Postuler</button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">10/09/2020</small>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">title mission</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <div style={{textAlign: 'right'}}>
                                <button className='postuler'>Postuler</button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">10/09/2020</small>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">title mission</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <div style={{textAlign: 'right'}}>
                                <button className='postuler'>Postuler</button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">10/09/2020</small>
                        </div>
                    </div>
                </div>
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">title mission</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <div style={{textAlign: 'right'}}>
                                <button className='postuler'>Postuler</button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">10/09/2020</small>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">title mission</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action..</p>
                            <div style={{textAlign: 'right'}}>
                                <button className='postuler'>Postuler</button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">10/09/2020</small>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">title mission</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <div style={{textAlign: 'right'}}>
                                <button className='postuler'>Postuler</button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">10/09/2020</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;