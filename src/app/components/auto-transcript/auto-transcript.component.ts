import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-transcript',
  templateUrl: './auto-transcript.component.html',
  styleUrls: ['./auto-transcript.component.scss']
})
export class AutoTranscriptComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}

