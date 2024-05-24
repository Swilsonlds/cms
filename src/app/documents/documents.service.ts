import { Document } from "./document.model"
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

export class DocumentsService {
  documents: Document[] =  []

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents;
  }

  getDocument(id: string): Document | null {
    for (const document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }
    return null;
  }
}