import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-twin',
  templateUrl: './digital-twin.component.html',
  styleUrls: ['./digital-twin.component.scss'] // Note the correction: styleUrls instead of styleUrl
})
export class DigitalTwinComponent {
  // Property to track if the dropdown is open
  isDropdownOpen = false;

  // Method to toggle the dropdown state
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}

