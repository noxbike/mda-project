import React, { Component } from 'react';
import '../style/partenaire.css';
import localhost from './config.json';
import SkeletonElement from './skeleton/SkeletonElement';

export default class Partenaire extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount(){
        fetch(`http://${localhost.localhost}/api/partenaire`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => this.setState({data: data.partenaireFound}))
    }

    render(){
        const { data } = this.state;
        return(
            <div className='partenaire col-sm-11 col-md-10 col-lg-9 col-xl-8'>
                <ul className='row col-12 d-flex justify-content-around'>
                    {
                       data && data.map(item => 
                            <li key={item.id}><a target='_blank' rel="noopener noreferrer" href={item.lien}><img className='img-fluid' src={ item.image } alt={item.nom} width='100px'/></a></li>)
                    }
                    {!data && [1,2,3,4,5,6].map(item => <SkeletonElement type='image' className='loader' />)}
                </ul>
            </div>
        )
    }
}