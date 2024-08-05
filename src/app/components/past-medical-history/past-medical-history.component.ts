import { Component } from '@angular/core';

@Component({
  selector: 'app-past-medical-history',
  templateUrl: './past-medical-history.component.html',
  styleUrls: ['./past-medical-history.component.css']
})
export class PastMedicalHistoryComponent {
  // Track the visibility of the section content
  isContentVisible = false;

  // Toggle visibility of the content
  toggleContentVisibility(): void {
    this.isContentVisible = !this.isContentVisible;
  }
}
