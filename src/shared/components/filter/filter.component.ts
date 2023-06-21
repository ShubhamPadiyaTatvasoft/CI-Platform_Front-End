import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FilterComponent {
  constructor() {}

  ngOnInit() {}

  searchMission(searchText: any) {
    console.log(searchText);
  }

  selectedCountries(event: any) {
    console.log(event);
  }

  selectedCities(event: any) {
    console.log(event);
  }

  selectedThemes(event: any) {
    console.log(event);
  }

  selectedSkills(event: any) {
    console.log(event);
  }
}
