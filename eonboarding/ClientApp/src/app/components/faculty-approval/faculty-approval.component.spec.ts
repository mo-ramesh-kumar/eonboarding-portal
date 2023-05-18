import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyApprovalComponent } from './faculty-approval.component';

describe('FacultyApprovalComponent', () => {
  let component: FacultyApprovalComponent;
  let fixture: ComponentFixture<FacultyApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
