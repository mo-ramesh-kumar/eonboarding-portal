import { Component, AfterViewInit } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-generate-digital-signature',
  templateUrl: './generate-digital-signature.component.html',
  styleUrls: ['./generate-digital-signature.component.css']
})
export class GenerateDigitalSignatureComponent implements AfterViewInit {

  signaturePad!: SignaturePad;
  signatureDataURL: string | null = null;

  ngAfterViewInit() {
    const canvas: HTMLCanvasElement | null = document.querySelector('#signatureCanvas');
    if (canvas) {
      this.initializeSignaturePad(canvas);
    }
  }

  initializeSignaturePad(canvas: HTMLCanvasElement) {
    this.signaturePad = new SignaturePad(canvas);
  }

  saveSignature() {
    if (this.signaturePad && this.signaturePad.isEmpty()) {
      alert('Please provide a signature.');
    } else {
      this.signatureDataURL = this.signaturePad.toDataURL(); 
      alert('Signature saved successfully!');
    }
  }

  downloadSignature() {
    if (this.signatureDataURL) {
      const link = document.createElement('a');
      link.href = this.signatureDataURL;
      link.download = 'signature.png';
      link.click();
    } else {
      alert('No signature to download.');
    }
  }
}