import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../film';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  @Input() films: Film[] = [];
  @Output() resultClick: EventEmitter<String> = new EventEmitter<String>();

  constructor(private router: Router) {}

  onResultClick(film: Film): void {
    console.log('film found ' + film.imdbID);
    this.resultClick.emit(film.imdbID); // Emit the clicked film to the parent component

    

  }
}
