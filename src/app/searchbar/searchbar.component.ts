import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FilmService } from '../film.service';
import { Router } from '@angular/router';
import { Film } from '../film';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  searchTerm: string = '';
  searchResults: Film[] = [];

  @Output() searchEmitter: EventEmitter<String> = new EventEmitter<String>();

  constructor(
    private _filmService: FilmService,
    private router: Router
  ) { }

  onSearch(): void {
    this.searchEmitter.emit(this.searchTerm);
    this.searchResults = this._filmService.getFilmsByKeyWord(this.searchTerm);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;

    if (!clickedElement.closest('.search-bar-container') && !clickedElement.closest('.search-results-container-overlay')) {
      this.resetSearchResults();
    }
  }

  // Method to reset the search results and search term
  resetSearchResults(): void {
    this.searchResults = [];
    this.searchTerm = '';
  }

  // Method to handle the click event from SearchResultComponent
  onResultClick(filmId: String): void {
    console.log('reaching parent ' + filmId);
    // Reset the search results when a result is clicked
    this.router.navigate(['/film', filmId]);
    this.resetSearchResults();
  }
}
