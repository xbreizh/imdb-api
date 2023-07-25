import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films!: Film[];

  constructor(
    private router: Router,
    private _filmService: FilmService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    console.log('entering list');
    this.films = this._filmService.getFilms();

    this._filmService.getFilmsObservable().subscribe(films => (this.films = films));
  }

  updateFilms(): void {
   
  }

  openFilmDetailPage(filmId: string|undefined) {
    if(filmId == null){
      this.router.navigate(['']);
    }
    console.log('opening a new page');
    this.router.navigate(['/film', filmId]);
  }

}
