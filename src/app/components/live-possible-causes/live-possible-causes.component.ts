import { Component } from '@angular/core';

@Component({
  selector: 'app-live-possible-causes',
  templateUrl: './live-possible-causes.component.html',
  styleUrls: ['./live-possible-causes.component.scss']
})
export class LivePossibleCausesComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
