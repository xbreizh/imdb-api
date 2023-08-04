import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountryService } from '../country.service';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit{
  @Input() selectedCountry: string = '';
  @Output() countryChanged = new EventEmitter<string>();

  countries: any[] = [];

  constructor(private countryService: CountryService, private filmService: FilmService) {}


  ngOnInit(){
    this.countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
    })
  }

  onCountryChange() {
    this.countryChanged.emit(this.selectedCountry);
    this.filmService.updateCountry(this.selectedCountry);
  }

}
