import React, { useState, useEffect} from 'react'
const localhost = require('../component/config.json');

export default function PresentationSalle() {
    const [ salle, setSalle ] = useState([]);

    useEffect(() => {
        fetch(`http://${ localhost.localhost }/api/salles/`,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((data) => setSalle(data.salleFound))
    },[])


    return (
        <div className='bloc-salle mb-4 p-0'>
            {
                salle.map(item =>
                    <div key={item.id} className={ `salle salle${item.id}` }>
                        <div className={ `image-salle p-0` }>
                            <img src={ require(`${item.image}`) }/>
                        </div>
                        <div className='body p-1'>
                            <h6><strong>{ item.titre }</strong></h6>
                            <p>{ item.body }</p>
                        </div>
                    </div>)
            }
        </div>
    )
}
