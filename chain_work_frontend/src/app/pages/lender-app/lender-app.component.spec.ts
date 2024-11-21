import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderAppComponent } from './lender-app.component';

describe('LenderAppComponent', () => {
  let component: LenderAppComponent;
  let fixture: ComponentFixture<LenderAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LenderAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenderAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
