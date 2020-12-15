import React, { useEffect } from 'react'

export default function Test() {

    useEffect(() => {
        fetch('https://www.googleapis.com/calendar/v3/calendars/rn4fnrdost4ifc2q6r1n03g8u4@group.calendar.google.com/events?key=AIzaSyDazrFUZYlHedsmTyPDXJrM4QdMLTuR4X0', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(res => console.log(res.items))
    },[])
    return (
        <div>
            
        </div>
    )
}
