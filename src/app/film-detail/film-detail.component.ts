import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent {
  film: Film | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {
    console.log('dede');
  }

  ngOnInit(): void {
    const filmId = this.route.snapshot.paramMap.get('id');
    console.log('getting into details ' + filmId)
    if (filmId) {
      const id = +filmId; // Convert the filmId from string to number
      this.film = this.filmService.getFilmById(id);
      console.log('film retrieved ' + this.film?.title);
    }
  }

  goBackToList(): void {
    this.router.navigate(['/']);
  }
}
