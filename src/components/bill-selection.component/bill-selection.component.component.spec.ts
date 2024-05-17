import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSelectionComponentComponent } from './bill-selection.component.component';

describe('BillSelectionComponentComponent', () => {
  let component: BillSelectionComponentComponent;
  let fixture: ComponentFixture<BillSelectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillSelectionComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillSelectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
