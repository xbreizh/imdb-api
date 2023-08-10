import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilmGenre } from './film-genre.enum';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private selectedGenreSubject: BehaviorSubject<FilmGenre> = new BehaviorSubject<FilmGenre>(Object.values(FilmGenre)[0]);
  selectedGenre$: Observable<FilmGenre> = this.selectedGenreSubject.asObservable();

  setSelectedGenre(genre: FilmGenre): void {
    console.log('updated genre from service ' + genre);
    this.selectedGenreSubject.next(genre);
  }
}
