import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerProposalComponent } from './freelancer-proposal.component';

describe('FreelancerProposalComponent', () => {
  let component: FreelancerProposalComponent;
  let fixture: ComponentFixture<FreelancerProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelancerProposalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
