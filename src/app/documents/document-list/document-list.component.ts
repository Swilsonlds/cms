import { Component, EventEmitter, Output} from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  constructor(private documentService: DocumentsService) { }

  documents = [];

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
  }
  
  @Output() selectedDocumentEvent: EventEmitter<Document> = new EventEmitter<Document>();

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
