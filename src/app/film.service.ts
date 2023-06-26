import { Injectable } from '@angular/core';
import { Film } from './film';
import { FilmCategory } from './film-category.enum';
import { FilmPojoComponent } from './fil-pojo/film-pojo.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private films: Film[] = [];
  private filmsSubject: BehaviorSubject<Film[]> = new BehaviorSubject<Film[]>([]);

  constructor(private pojoFilm: FilmPojoComponent) {
    this.initializeFilms();
  }

  private initializeFilms(): void {
    this.films = this.pojoFilm.getFilms();
    this.filmsSubject.next(this.films);
  }

  getFilms(): Film[] {
    return this.films;
  }

  getFilmById(id: number): Film | undefined {
    console.log('finding gile')
    const film: Film | undefined = this.films.find(film => film.id === id);
    console.log('film found ' + film?.id);
    console.log('film found ' + film?.title);
    return film;
  }

  getFilmsByKeyWord(keyword: string) {

  }

  getFilmsByCategory(category: FilmCategory): Film[] {
    return this.films.filter(film => film.category === category);
  }

  shuffle(): void {
    console.log('shuffling');
    this.filmsSubject.next(this.pojoFilm.getFilmSample());
    console.log("films length " + this.films.length);
  }


  getFilmsObservable(): Observable<Film[]> {
    return this.filmsSubject.asObservable();
  }
}
