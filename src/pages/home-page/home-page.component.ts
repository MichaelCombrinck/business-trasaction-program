import { Component } from '@angular/core';
import { TransactionPageComponent } from '../transaction-page/transaction-page.component';
import { CalendarPageComponent } from '../calendar-page/calendar-page.component';
import { NotesPageComponent } from '../notes-page/notes-page.component';
import { TaskManagerPageComponent } from '../task-manager-page/task-manager-page.component';
import { WeatherForecastPageComponent } from '../weather-forecast-page/weather-forecast-page.component';
import { BudgetTrackerPageComponent } from '../budget-tracker-page/budget-tracker-page.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TransactionPageComponent, CalendarPageComponent,NotesPageComponent,TaskManagerPageComponent,WeatherForecastPageComponent,NotesPageComponent,BudgetTrackerPageComponent, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
