import React, { useState, useEffect} from 'react'

export default function PresentationSalle() {
    const [ salle, setSalle ] = useState([]);

    useEffect(() => {
        fetch(`./texte/salle.json`)
        .then(res => res.json())
        .then((data) => setSalle(data))
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
