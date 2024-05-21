import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cms';
  selectedFeature: string;

  constructor() { }

  switchView(selectedFeature: string) {
    this.selectedFeature = selectedFeature;
  }
}
