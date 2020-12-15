import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import  {faCalendarAlt, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'
import Moment from 'moment';
import 'moment/locale/fr';
import '../style/event.css';
import SkeletonElement from './skeleton/SkeletonElement';
import SkeletonEvent from './skeleton/SkeletonEvent';
const localhost = require('./config.json');
Moment.locale('fr');

export default class Events extends Component {

    constructor(props){
        super(props);
        this.state = {
            agenda: null
        }
    }

    time(date){
        date= new Date(date);
        date = Moment(date).format("Do MMM");
        return date;
    }

    componentDidMount(){
        fetch(`http://${ localhost.localhost }/api/agenda`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => this.setState({agenda: data.agendaFound}))
    }

    render() {
        const { agenda } = this.state;
        return (
            <div id='events' className='col-12 ml-auto mr-auto row d-flex justify-content-around'>
                {agenda && agenda.map( item =>
                <div key={item.id} className='mb-4 row cart'>
                    <div className='row' style={{backgroundImage:`url(${item.photo})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'80%', width:'100%'}} ></div>
                    <div className='face2 row flex-column justify-content-around p-0'>
                        <div className='text-center' style={{fontWeight:'bolder',fontSize:'1.1em', width:'20%', backgroundColor:'#932824c2', color:'white'}}>
                            <p>{this.time(item.date)}</p>
                        </div>
                        <div className='text-center' style={{width:'70%'}}>
                            <h5>{item.titre}</h5>
                        </div>
                        
                    </div>
                </div>
                )}
                {!agenda && [1,2].map( item => 
                    <SkeletonEvent key={item}/>
                )}

                <div className='autre-evenement col-12'>
                    {agenda ? <a><span>+ Tout les événements</span></a> : <SkeletonElement type='title' />}
                </div>
            </div>
        )
    }
}
