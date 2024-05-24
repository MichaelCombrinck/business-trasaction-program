import { Component } from '@angular/core';
import { TaskFormComponentComponent } from '../../components/task-form.component/task-form.component.component';
import { TaskListComponentComponent } from '../../components/task-list.component/task-list.component.component';

@Component({
  selector: 'app-task-manager-page',
  standalone: true,
  imports: [TaskFormComponentComponent,TaskListComponentComponent],
  templateUrl: './task-manager-page.component.html',
  styleUrl: './task-manager-page.component.scss'
})
export class TaskManagerPageComponent {

}
