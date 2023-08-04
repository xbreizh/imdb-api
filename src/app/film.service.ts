import { Injectable } from '@angular/core';
import { Film } from './film';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { FilmCategory } from './film-category.enum';
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
  private filmCategory: FilmCategory = FilmCategory.All;
  private filmWebServiceUrl: string = "http://localhost:8081/";
  private jsonFileUrl: string = 'assets/films.json';
  private selectedCountry: string = '';
  private searchCriteria: SearchCriteria = {
    filmId: '',
    genre: [],
    firstDate: '',
    secondDate: '',
    country: 'All'
  }


  constructor(
    private httpClient: HttpClient
  ) {
    this.testWebService().subscribe(isServiceUp => {
      if (isServiceUp) {
        console.log('service is up');

        this.searchCriteria.country = 'United States'; // Set your default search criteria here

        this.searchCriteriaSubject.subscribe(searchCriteria => {
          this.getFilmsWithSearchCriteria(searchCriteria).subscribe(
            films => {
              this.films = films;
              this.filmsSubject.next(films);
              console.log('Retrieved films:', films);
            },
            error => {
              // Handle errors here
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

  updateCountry(country: string) {
    this.searchCriteria.country = country;
    this.refreshFilmSubject();
    this.searchCriteriaSubject.next(this.searchCriteria); // Notify subscribers about the change
  }
  

  private getSearchCriteria(): SearchCriteria {
    const searchCriteria: SearchCriteria = {
      filmId: 'exampleFilmId',
      genre: ['Drama', 'Action'],
      firstDate: '2023-01-01',
      secondDate: '2023-12-31',
      country: this.selectedCountry
    }
    return searchCriteria;
  }

  private initializeFilmsFromLocalFile(): void {
    this.getFilmsFromLocalFile().subscribe(films => {
      this.films = films;
      this.filmsSubject.next(this.films);
    });
  }

  private initializeFilmsFromWebService(): void {
    this.getFilmsFromWebService().subscribe(films => {
      this.films = films;
      this.filmsSubject.next(this.films);
    });
  }

  getFilmsFromLocalFile(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.jsonFileUrl).pipe(
      map((response: any) => response as Film[])
    );
  }

  // Function to call the web service and get the JSON data
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
      map(() => true), // If the request is successful, return true
      catchError(() => of(false)) // If there's an error, return false
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
    if (this.filmCategory.toUpperCase() === 'ALL') {
      this.filmsSubject.next(this.films);
    } else {
      const filteredFilms: Film[] = this.films.filter(film => film.Genre?.toUpperCase().includes(this.filmCategory.toUpperCase()));
      const uniqueFilteredFilms: Film[] = Array.from(new Set(filteredFilms));
      this.filmsSubject.next(uniqueFilteredFilms);
    }
    console.log('country selected: ' + this.searchCriteria.country);
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
