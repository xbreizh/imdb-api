import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit{
  films!: Film[];

  constructor(private _filmService: FilmService) {

  }

  ngOnInit() {
    this.films = this._filmService.getFilms();
    console.log(this.films.length)
  }

}
