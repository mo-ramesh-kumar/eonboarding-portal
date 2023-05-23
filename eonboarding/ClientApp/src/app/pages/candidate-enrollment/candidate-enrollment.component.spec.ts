import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateEnrollmentComponent } from './candidate-enrollment.component';

describe('CandidateEnrollmentComponent', () => {
  let component: CandidateEnrollmentComponent;
  let fixture: ComponentFixture<CandidateEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateEnrollmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
