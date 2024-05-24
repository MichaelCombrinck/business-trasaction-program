import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,MatInputModule,MatCardModule, MatButtonModule],
  templateUrl: './task-form.component.component.html',
  styleUrl: './task-form.component.component.scss'
})
export class TaskFormComponentComponent {
  taskForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, public _taskService: TaskService) { }

  ngOnInit(): void {
    this.taskForm = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmitClick(): void {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      this._taskService.addToTaskList(this.taskForm.value)
    } 
  }
}
