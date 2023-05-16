import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateDigitalSignatureComponent } from './generate-digital-signature.component';

describe('GenerateDigitalSignatureComponent', () => {
  let component: GenerateDigitalSignatureComponent;
  let fixture: ComponentFixture<GenerateDigitalSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateDigitalSignatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateDigitalSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
