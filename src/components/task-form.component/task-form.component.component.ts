import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,MatInputModule,MatCardModule],
  templateUrl: './task-form.component.component.html',
  styleUrl: './task-form.component.component.scss'
})
export class TaskFormComponentComponent {
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmitClick(): void {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      // handle form submission
    }
  }
}
