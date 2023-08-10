import { Injectable } from '@angular/core';
import { Film } from './film';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { FilmGenre } from './film-genre.enum';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { SearchCriteria } from './search-criteria';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private films: Film[] = [];
  private filmsSubject: BehaviorSubject<Film[]> = new BehaviorSubject<Film[]>([]);
  private filmGenre: FilmGenre = FilmGenre.All;
  private filmWebServiceUrl: string = "http://localhost:8081/";
  private jsonFileUrl: string = 'assets/films.json';
  private defaultSearchCriteria: SearchCriteria = {
    genre: [],
    firstDate: '',
    secondDate: '',
    country: ''
  }
  private searchCriteria: SearchCriteria = this.defaultSearchCriteria;


  constructor(
    private httpClient: HttpClient
  ) {
    this.testWebService().subscribe(isServiceUp => {
      if (isServiceUp) {
        console.log('service is up');

        this.searchCriteriaSubject.subscribe(searchCriteria => {
          this.getFilmsWithSearchCriteria(searchCriteria).subscribe(
            films => {
              this.films = films;
              this.filmsSubject.next(films);
              console.log('Retrieved films:', films);
            },
            error => {
              console.error('Error retrieving films:', error);
            }
          );
        });
      } else {
        console.log('service is down');
        this.initializeFilmsFromLocalFile();
      }
    });
  }

  private searchCriteriaSubject: BehaviorSubject<SearchCriteria> = new BehaviorSubject<SearchCriteria>(this.searchCriteria);

  resetSearchCriteria(){
    this.searchCriteria = this.defaultSearchCriteria;
    this.searchCriteriaSubject.next(this.searchCriteria);
  }

  updateCountry(country: string) {
    this.searchCriteria.country = country;
    this.searchCriteriaSubject.next(this.searchCriteria);
    this.refreshFilmSubject();
  }

  updateGenre(genre: string[]) {
    this.searchCriteria.genre = genre;
    console.log('getting genre ' + genre);
    this.searchCriteriaSubject.next(this.searchCriteria);
    this.refreshFilmSubject();
  }

  private initializeFilmsFromLocalFile(): void {
    this.getFilmsFromLocalFile().subscribe(films => {
      this.films = films;
      this.filmsSubject.next(this.films);
    });
  }

  getFilmsFromLocalFile(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.jsonFileUrl).pipe(
      map((response: any) => response as Film[])
    );
  }

  getFilmsFromWebService(): Observable<Film[]> {
    const keyword: string = 'best';
    return this.httpClient.get<Film[]>(this.filmWebServiceUrl + 'movies?keyword=' + keyword).pipe(
      map((response: any) => response as Film[])
    );
  }

  getFilmsWithSearchCriteria(criteria: SearchCriteria): Observable<Film[]> {
    const url = `${this.filmWebServiceUrl}search`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    console.log('trying to get criteria stuff ' + url + "\n" + JSON.stringify(criteria));
    return this.httpClient.post<Film[]>(url, criteria, { headers }).pipe(
      catchError(error => {
        console.error('Error in getFilmsWithSearchCriteria:', error);
        throw error;
      })
    );
  }


  testWebService(): Observable<boolean> {
    const url = this.filmWebServiceUrl + 'test';

    return this.httpClient.get<string>(url).pipe(
      map(() => true), 
      catchError(() => of(false)) 
    );
  }

  getFilms(): Film[] {
    return this.films;
  }

  getFilmById(id: string): Film | undefined {
    const film: Film | undefined = this.films.find(film => film.imdbID === id);
    return film;
  }

  refreshFilmSubject() {
    if (this.filmGenre.toUpperCase() === 'ALL') {
      this.filmsSubject.next(this.films);
    } else {
      const filteredFilms: Film[] = this.films.filter(film => film.Genre?.toUpperCase().includes(this.filmGenre.toUpperCase()));
      const uniqueFilteredFilms: Film[] = Array.from(new Set(filteredFilms));
      this.filmsSubject.next(uniqueFilteredFilms);
    }
    console.log('criteria ' + this.searchCriteria.country);
  }

  getFilmsByGenre(genre: FilmGenre): void {
    this.filmGenre = genre;
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
      return;
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
