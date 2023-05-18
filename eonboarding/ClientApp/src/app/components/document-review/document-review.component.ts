import { Component } from '@angular/core';

@Component({
  selector: 'app-document-review',
  templateUrl: './document-review.component.html',
  styleUrls: ['./document-review.component.css']
})
export class DocumentReviewComponent {
  documents = [
    { title: 'Document 1', submittedBy: 'Rahul Agarwal' },
    { title: 'Document 2', submittedBy: 'Puja Bansal' },
    { title: 'Document 3', submittedBy: 'Pretty Seth' }
  ];

  approveDocument(document: any) {
    // Logic to approve the document
    console.log('Approved:', document.title);
  }

  rejectDocument(document: any) {
    // Logic to reject the document
    console.log('Rejected:', document.title);
  }
}
