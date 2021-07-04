import React, { Component } from 'react'
import parse from 'html-react-parser';
import time from '../utils/timeFormat';
const localhost = require('../config.json');

export default class contenuAgenda extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: null,
            url: this.props.match.params.titre,
        }
    }
    
    componentDidMount = () => {
        const { url } = this.state;
        fetch(`http://${ localhost.localhost }/api/agenda/${ url }`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => this.setState({data: res.agendaFound}))
    }

    render(){
        const { data, url } = this.state;

        return (
            <div className='contenuArticle col-12 pt-4'>
                <div className='col-12 col-lg-8 ml-auto mr-auto'>
                    {data &&
                        <div>
                            <h1> { data.titre }</h1>
                            <div style={{color:'gray'}}>
                                <p>Publié le { time(data.createdAt) }</p>
                                <p>Par { data.auteur }</p>
                            </div>
                            <div className='row justify-content-center'>
                                <img className='mb-4' src={`http://${localhost.localhost}/${data.photo}`} width='50%' alt='top-photo'/>
                            </div>
                            {data.contenu ? parse(data.contenu): null}
                            <div className='row col-12 mt-4' style={{background:'gray', color:'white'}}>
                                <p className='col-6 mt-4'><strong>Où:</strong> {data.ou}</p>
                                {!data.au ? <p className='col-6 mt-4'><strong>Date:</strong> {time(data.du)}</p> : <div className='row col-6 justify-content-around mt-4'><p><strong>Du:</strong> {time(data.du)}</p><p><strong>Au:</strong> {time(data.au)}</p></div>}
                            </div>
                        </div>
                    }
                    {!data && <h4 className='mt-4'>Il n'y a aucun contenu pour le moment</h4>}
                </div>
            </div>
        )
    }
}
