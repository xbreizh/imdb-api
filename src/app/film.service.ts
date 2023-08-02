import { Injectable } from '@angular/core';
import { Film } from './film';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FilmCategory } from './film-category.enum';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private films: Film[] = [];
  private filmsSubject: BehaviorSubject<Film[]> = new BehaviorSubject<Film[]>([]);
  private filmCategory: FilmCategory = FilmCategory.All;
  private filmUrl: string = "http://localhost:8000";
  private jsonFileUrl: string = 'assets/films.json';

  constructor(
    private httpClient: HttpClient
  ) {
    this.initializeFilms();
  }

  private initializeFilms(): void {
    this.films = [];

    this.httpClient.get<Film[]>(this.jsonFileUrl).subscribe(films => {
      this.films = films;
      this.filmsSubject.next(this.films);
    });
    this.filmsSubject.next(this.films);
    this.testWebService();
  }

  // Function to call the web service and get the JSON data
  getFilmsFromWebService(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.filmUrl).pipe(
      map((response: any) => response as Film[])
    );
  }

  testWebService(){
    const url = "http://localhost:8081/test";
    const response: Observable<String>= this.httpClient.get<String>(url).pipe(
      map((response: any) => response as String)
    );
    response.subscribe((value: String) => {
      console.log('Received value:', value);
    });
  }

  getFilms(): Film[] {
    return this.films;
  }

  getFilmById(id: string): Film | undefined {
    const film: Film | undefined = this.films.find(film => film.imdbID === id);
    return film;
  }

  refreshFilmSubject() {
    if (this.filmCategory.toUpperCase() === 'ALL') {
      this.filmsSubject.next(this.films);
    } else {
      const filteredFilms: Film[] = this.films.filter(film => film.Genre?.toUpperCase().includes(this.filmCategory.toUpperCase()));
      const uniqueFilteredFilms: Film[] = Array.from(new Set(filteredFilms));
      this.filmsSubject.next(uniqueFilteredFilms);
    }
  }

  getFilmsByCategory(category: FilmCategory): void {
    this.filmCategory = category;
    this.refreshFilmSubject();
  }

  createFilm(film: Film): string {
    console.log('film reçu: ' + film.Title);
    const newId = "newId";
    film.imdbID = newId;
    this.films.push(film);
    return newId;
  }

  shuffle(): void {
    if (this.films.length === 0) {
      return; // No need to shuffle an empty array
    }
    
    const randomIndex = Math.floor(Math.random() * this.films.length);
  
    this.filmsSubject.next([this.films[randomIndex]]);
  }
  


  getFilmsObservable(): Observable<Film[]> {
    return this.filmsSubject.asObservable();
  }

  getFilmsByKeyWord(searchTerm: string): Film[] {
    if (searchTerm === undefined) {
      return []; // Return an empty array or handle it as needed
    }
    return this.films.filter(film => film.Title?.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
