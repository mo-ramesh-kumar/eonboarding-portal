import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferLetterGenerationComponent } from './offer-letter-generation.component';

describe('OfferLetterGenerationComponent', () => {
  let component: OfferLetterGenerationComponent;
  let fixture: ComponentFixture<OfferLetterGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferLetterGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferLetterGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
