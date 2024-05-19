import { Component, EventEmitter, Output} from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent: EventEmitter<Document> = new EventEmitter<Document>();

  documents = [
    new Document(1,'txt','empty dex doc','https//mylink.com', 'none'),
    new Document(2,'pdf','pdf doc','https//mypdf.com', 'none')
  ]

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
