import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerContractComponent } from './freelancer-contract.component';

describe('FreelancerContractComponent', () => {
  let component: FreelancerContractComponent;
  let fixture: ComponentFixture<FreelancerContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelancerContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
