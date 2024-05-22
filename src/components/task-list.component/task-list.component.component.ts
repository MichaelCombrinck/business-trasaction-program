import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule],
  templateUrl: './task-list.component.component.html',
  styleUrl: './task-list.component.component.scss'
})
export class TaskListComponentComponent {
  tasks: { title: string, description: string }[] = [];

  ngOnInit(): void {
    // Initialize with some tasks
    this.tasks = [
      { title: 'Task 1', description: 'Description 1' },
      { title: 'Task 2', description: 'Description 2' },
    ];
  }

  onDeleteTaskClick(task: { title: string, description: string }): void {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
