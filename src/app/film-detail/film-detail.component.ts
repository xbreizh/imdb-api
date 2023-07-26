import { Component, OnChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnChanges{
  film: Film | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {
    console.log('dede');
    // Subscribe to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadFilmData(); // Load film data on route change
      }
    });
  }

  ngOnInit(): void {
    this.loadFilmData();
  }

  ngOnChanges(): void {
    this.loadFilmData();
  }

  loadFilmData(): void {
    const filmId = this.route.snapshot.paramMap.get('imdbID');
    console.log('getting into details ' + filmId);
    if (filmId) {
      const id = filmId; // Convert the filmId from string to number
      this.film = this.filmService.getFilmById(id);
    }
  }
}
