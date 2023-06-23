import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film';
import { FilmCategory } from '../film-category.enum';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films!: Film[];
  selectedCategory: FilmCategory = Object.values(FilmCategory)[0];

  constructor(
    private _filmService: FilmService,
    private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.films = this._filmService.getFilms();
    this.categoryService.selectedCategory$.subscribe(category => {
      this.selectedCategory = category;
      this.updateFilms();
    });
    this._filmService.getFilmsObservable().subscribe(films => this.films = films)
  }

  updateFilms(): void {
    if (this.selectedCategory === FilmCategory.None) {
      this.films = this._filmService.getFilms();
    } else {
      this.films = this._filmService.getFilmsByCategory(this.selectedCategory);
    }
  }
}
