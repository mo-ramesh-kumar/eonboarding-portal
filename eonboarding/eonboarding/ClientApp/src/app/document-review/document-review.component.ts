import { Component } from '@angular/core';

@Component({
  selector: 'app-document-review',
  templateUrl: './document-review.component.html',
  styleUrls: ['./document-review.component.css']
})
export class DocumentReviewComponent {
  documents = [
    { title: 'Document 1', submittedBy: 'John Doe' },
    { title: 'Document 2', submittedBy: 'Jane Smith' },
    { title: 'Document 3', submittedBy: 'Bob Johnson' }
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
