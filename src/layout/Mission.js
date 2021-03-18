import React, { useState, useEffect } from 'react';
import '../style/mission.css';
import backgroundMission from '../image/backgroundMission.jpg'
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
            <div className='col-12 col-md-8 col-lg-8'>
                <div className='col-12 p-0 m-0 mb-4'  style={{backgroundImage:`url(${backgroundMission})`, backgroundSize:'cover', width:'100%', height:'500px'}}>
                    <div className='row ml-1 align-items-end' style={{backgroundColor:'#6dcff65b', backgroundSize:'cover',  width:'100%', height:'500px'}}>
                        <div className="row form-group col-md-4 col-lg-4 ml-auto mr-auto"  style={{backgroundColor: 'rgba(121, 121, 121, 0.9)', padding:'10px 80px 10px 10px', borderRadius:'10px'}}>
                            <select onChange= {(e) => setTheme(e.target.value)} className="form-control" id="exampleFormControlSelect1">
                                <option>Tout</option>
                                {
                                    data && data.map(item => <option key={item.id}>{item.missions}</option> )
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    {
                        data && data.map(item => item.missions === theme ? <div><h4>Intitulé de la mission</h4><div className='row pl-3'><p className='mr-4' key={item.id}>{item.intitule}</p><a href={item.lien}>Plus d'info</a></div></div> : null )
                    }
                </div>
                <div className="card-deck mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className='row justify-content-between'>
                                <img src='https://www.laliguedelenseignement-centre.fr/wp-content/uploads/2018/10/icon.png' width='50px'></img>
                                <p>01/01/2021</p>
                            </div>
                            <h5 className="card-title text-center">title mission</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className='row justify-content-around'>
                            <p>location</p>
                            <p>Association</p>
                        </div>
                        <button className='btnInfo'><strong>Plus d'info</strong></button>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className='row justify-content-between'>
                                <img src='https://www.laliguedelenseignement-centre.fr/wp-content/uploads/2018/10/icon.png' width='50px'></img>
                                <p>01/01/2021</p>
                            </div>
                            <h5 className="card-title text-center">title mission</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className='row justify-content-around'>
                            <p>location</p>
                            <p>Association</p>
                        </div>
                        <button className='btnInfo'><strong>Plus d'info</strong></button>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className='row justify-content-between'>
                                <img src='https://www.laliguedelenseignement-centre.fr/wp-content/uploads/2018/10/icon.png' width='50px'></img>
                                <p>01/01/2021</p>
                            </div>
                            <h5 className="card-title text-center">title mission</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className='row justify-content-around'>
                            <p>location</p>
                            <p>Association</p>
                        </div>
                        <button className='btnInfo'><strong>Plus d'info</strong></button>
                    </div>
                </div>
                <div className="card-deck">
                <div className="card">
                        <div className="card-body">
                            <div className='row justify-content-between'>
                                <img src='https://www.laliguedelenseignement-centre.fr/wp-content/uploads/2018/10/icon.png' width='50px'></img>
                                <p>01/01/2021</p>
                            </div>
                            <h5 className="card-title text-center">title mission</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className='row justify-content-around'>
                            <p>location</p>
                            <p>Association</p>
                        </div>
                        <button className='btnInfo'><strong>Plus d'info</strong></button>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className='row justify-content-between'>
                                <img src='https://www.laliguedelenseignement-centre.fr/wp-content/uploads/2018/10/icon.png' width='50px'></img>
                                <p>01/01/2021</p>
                            </div>
                            <h5 className="card-title text-center">title mission</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className='row justify-content-around'>
                            <p>location</p>
                            <p>Association</p>
                        </div>
                        <button className='btnInfo'><strong>Plus d'info</strong></button>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className='row justify-content-between'>
                                <img src='https://www.laliguedelenseignement-centre.fr/wp-content/uploads/2018/10/icon.png' width='50px'></img>
                                <p>01/01/2021</p>
                            </div>
                            <h5 className="card-title text-center">title mission</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className='row justify-content-around'>
                            <p>location</p>
                            <p>Association</p>
                        </div>
                        <button className='btnInfo'><strong>Plus d'info</strong></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;