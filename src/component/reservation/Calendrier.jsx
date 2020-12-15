import  React, { Component } from 'react';
import { ScheduleComponent , Week, Month, Inject, ViewsDirective, ViewDirective, Day } from '@syncfusion/ej2-react-schedule';
import { L10n, loadCldr} from '@syncfusion/ej2-base';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const language = require('../L10n.json');
L10n.load(language)

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/fr-CH/ca-gregorian.json'),
    require('cldr-data/main/fr-CH/numbers.json'),
    require('cldr-data/main/fr-CH/timeZoneNames.json')
);


export default class Calendrier extends Component {

    constructor() {
        super(...arguments);
        this.publicKey = 'AIzaSyCZ07Mf4GQBWnhCw3VKors48cBCUQi4H_o';
        this.state = {
            dataManger: null,
        }
    }

    onDataBinding(e) {
        let items = e.result.items;
        let scheduleData = [];
        if (items.length > 0) {
            for (let i = 0 ; i < items.length; i++) {
                if(items[i].status === 'confirmed'){
                    let event = items[i];
                    let when = event.start.dateTime;
                    let start = event.start.dateTime;
                    let end = event.end.dateTime;
                    if (!when) {
                        when = event.start.date;
                        start = event.start.date;
                        end = event.end.date;
                    }
                    var recurence = ''
                    if(event.recurrence){
                        let value = event.recurrence[0]
                        for(let j = 6; j < value.length; j++){
                            recurence += value[j];
                        }
                    }
                    scheduleData.push({
                        Id: event.id,
                        Subject: event.summary,
                        StartTime: new Date(start),
                        EndTime: new Date(end),
                        IsAllDay: !event.start.dateTime,
                        Recurrence: recurence === '' ? false : true,
                        RecurrenceRule: recurence,
                    });
                }
            }
        }
        e.result = scheduleData;
    }

    componentWillReceiveProps = (nextProps) => {
        let result = new DataManager({
            url: 'https://www.googleapis.com/calendar/v3/calendars/' + nextProps.calendarId + '/events?key=' + this.publicKey,
            adaptor: new WebApiAdaptor(),
            crossDomain: true
        })
        this.setState({dataManger: result})
    }

    render() {
        const { dataManger } = this.state;
        return <ScheduleComponent locale={'fr-CH'} readonly={true} ref={schedule => this.scheduleObj = schedule} width='100%' height='550px' eventSettings={{ dataSource: dataManger }} dataBinding={this.onDataBinding.bind(this)}>
                <ViewsDirective>
                    <ViewDirective firstDayOfWeek={1} startHour='8:00' endHour='20:00' option='Week'/>
                    <ViewDirective firstDayOfWeek={1} startHour='8:00' endHour='20:00' option='Month'/>
                </ViewsDirective>
                <Inject services={[Day, Week, Month]}/>
            </ScheduleComponent>
        ;
    }
}