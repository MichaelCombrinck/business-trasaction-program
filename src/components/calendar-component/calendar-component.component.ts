import { Component, OnInit } from '@angular/core';
import {  FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-calendar-component',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar-component.component.html',
  styleUrl: './calendar-component.component.scss'
})
export class CalendarComponentComponent implements OnInit{
  calendarOptions!: CalendarOptions;

  ngOnInit() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        { title: 'Event 1', date: '2023-05-01' },
        { title: 'Event 2', date: '2023-05-02' }
      ],
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true
    };
  }
}
