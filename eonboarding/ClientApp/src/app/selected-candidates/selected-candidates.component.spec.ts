import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCandidatesComponent } from './selected-candidates.component';

describe('SelectedCandidatesComponent', () => {
  let component: SelectedCandidatesComponent;
  let fixture: ComponentFixture<SelectedCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedCandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
