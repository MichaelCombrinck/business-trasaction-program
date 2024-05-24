import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TaskService } from '../../services/task-service';
import { Task } from '../../interfaces/task-interface';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './task-list.component.component.html',
  styleUrl: './task-list.component.component.scss'
})
export class TaskListComponentComponent {
  tasks: Task[] = [];

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this._taskService.getTasklist();
  }

  onDeleteTaskClick(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
