import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceProfileComponent } from './freelance-profile.component';

describe('FreelanceProfileComponent', () => {
  let component: FreelanceProfileComponent;
  let fixture: ComponentFixture<FreelanceProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelanceProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelanceProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
