import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderDashboardComponent } from './lender-dashboard.component';

describe('LenderDashboardComponent', () => {
  let component: LenderDashboardComponent;
  let fixture: ComponentFixture<LenderDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LenderDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
