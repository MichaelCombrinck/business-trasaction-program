import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetTrackerPageComponent } from './budget-tracker-page.component';

describe('BudgetTrackerPageComponent', () => {
  let component: BudgetTrackerPageComponent;
  let fixture: ComponentFixture<BudgetTrackerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetTrackerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudgetTrackerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
