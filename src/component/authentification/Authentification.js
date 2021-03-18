import { useEffect } from "react";
var localhost = require('../config.json');

export default function Authentification(props) {
    const token = localStorage.getItem('x-xsrf-token');

    useEffect(() => {
        fetch(`http://${localhost.localhost}/api/auth`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-xsrf-token': token,
          },
          credentials:'include'
        })
        .then(data => data.json())
        .then(res => props.setUser(res.user))
      },[])

  return null;
}