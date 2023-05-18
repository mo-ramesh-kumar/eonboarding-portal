import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCultureComponent } from './company-culture.component';

describe('CompanyCultureComponent', () => {
  let component: CompanyCultureComponent;
  let fixture: ComponentFixture<CompanyCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCultureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
