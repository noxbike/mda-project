import React from 'react';
import Moment from 'moment';
import 'moment/locale/fr';
Moment.locale('fr');

export default function time(date, years, hours){
    var render = "Do MMM";
    if(years){
        render += " YYYY"
    }
    if(hours){
        render += " HH:mm"
    }
    
    date= new Date(date);
    date = Moment(date).format(render);
    return date;
}