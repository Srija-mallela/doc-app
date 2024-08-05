import { Component } from '@angular/core';

@Component({
  selector: 'app-clinical-codes',
  templateUrl: './clinical-codes.component.html',
  styleUrls: ['./clinical-codes.component.scss']
})
export class ClinicalCodesComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
