import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, Toolbar, ViewSwitcher, MonthView, DayView } from '@devexpress/dx-react-scheduler-material-ui';
const appointments = [
    { startDate: '2020-09-30T09:45', endDate: '2020-09-30T11:00', title: 'Meeting' },
    { startDate: '2020-09-29T12:00', endDate: '2020-09-29T13:30', title: 'Go to a gym' },
  ];

export default class Calendrier extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: appointments,
          currentViewName: 'work-week',
          locale: 'fr-FR',
        };
        this.currentViewNameChange = (currentViewName) => {
          this.setState({ currentViewName });
        };
      }

    render(){
        const { data, currentViewName, locale } = this.state;
        return(
            <div>
                <Paper>
                    <Scheduler
                    data={data}
                    locale={locale}
                    height={660}
                    >
                    <ViewState
                        defaultCurrentDate= {Date()}
                        currentViewName={currentViewName}
                        onCurrentViewNameChange={this.currentViewNameChange}
                    />

                    <WeekView
                        displayName='Semaine'
                        startDayHour={8}
                        endDayHour={17}
                    />
                    <WeekView
                        name="work-week"
                        displayName="Semaine de travail"
                        excludedDays={[0, 6]}
                        startDayHour={8}
                        endDayHour={17}
                    />
                    <MonthView 
                    displayName='Mois'
                    />
                    <DayView
                    displayName="Aujourd'hui"
                    />

                    <Toolbar />
                    <ViewSwitcher />
                    <Appointments />
                    </Scheduler>
                </Paper>
            </div>
        )
    }
}