import { Component } from '@angular/core';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponentComponent } from '../../components/calendar-component/calendar-component.component';

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [CalendarComponentComponent, FullCalendarModule, FullCalendarModule],
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.scss'
})
export class CalendarPageComponent {

}
