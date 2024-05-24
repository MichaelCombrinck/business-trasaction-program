import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerPageComponent } from './task-manager-page.component';

describe('TaskManagerPageComponent', () => {
  let component: TaskManagerPageComponent;
  let fixture: ComponentFixture<TaskManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManagerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
