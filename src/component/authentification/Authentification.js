const localhost = require('../config.json');
export default function Authentification(){
    const token = localStorage.getItem('x-xsrf-token');
    if(token){
        return true;
    }
    else{
        return false;
    }
}
/*
export default function Authentification(){
        let data = fetch(`http://${localhost.localhost}/api/auth`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                
            }
        })
        .then(data => data.json())
        .then(data => data.user)
        console.log(data)
        return data;
}*/