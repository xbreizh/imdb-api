import { Component } from '@angular/core';
import { FilmGenre } from '../film-genre.enum';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-genre-button',
  templateUrl: './genre-button.component.html',
  styleUrls: ['./genre-button.component.scss']
})
export class GenreButtonComponent {

  private _filmService: FilmService;

  constructor(_filmService: FilmService) {
    this._filmService = _filmService;
  }
  filmGenres: string[] = this.enumToArray(FilmGenre);
  selectedGenres: Set<string> = new Set<string>();


  filterByGenre(genre: string) {
    if (genre === 'All') {
      this.selectedGenres.clear();
      this.selectedGenres.add('All'); // Add 'All' to selected genres
    } else {
      if (this.selectedGenres.has('All')) {
        this.selectedGenres.delete('All'); // Remove 'All' if previously selected
      }
  
      if (this.selectedGenres.has(genre)) {
        this.selectedGenres.delete(genre);
      } else {
        this.selectedGenres.add(genre);
      }
    }
  
    this._filmService.updateGenre([...this.selectedGenres]);
  }
  

  isGenreSelected(genre: string): boolean {
    return this.selectedGenres.has(genre);
  }

  enumToArray(enumObject: any): string[] {
    return Object.keys(enumObject).map(key => enumObject[key]);
  }

}
