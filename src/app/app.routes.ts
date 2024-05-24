import { RouterModule, Routes } from '@angular/router';
import { CalendarPageComponent } from '../pages/calendar-page/calendar-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { NotesPageComponent } from '../pages/notes-page/notes-page.component';
import { TaskManagerPageComponent } from '../pages/task-manager-page/task-manager-page.component';
import { WeatherForecastPageComponent } from '../pages/weather-forecast-page/weather-forecast-page.component';
import { TransactionPageComponent } from '../pages/transaction-page/transaction-page.component';
import { NgModule } from '@angular/core';
import { BudgetTrackerPageComponent } from '../pages/budget-tracker-page/budget-tracker-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'task-manager', component: TaskManagerPageComponent },
    { path: 'calendar', component: CalendarPageComponent },
    { path: 'notes', component: NotesPageComponent },
    { path: 'weather', component: WeatherForecastPageComponent },
    { path: 'transaction', component: TransactionPageComponent },
    { path: 'budget-tracker', component: BudgetTrackerPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
