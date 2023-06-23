import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film';
import { FilmCategory } from '../film-category.enum';
import { CategoryService } from '../category.service';
import { FilmDetailPopupComponent } from '../film-detail-popup/film-detail-popup.component';
import { MatDialog } from '@angular/material/dialog';

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
    private categoryService: CategoryService,
    private dialog: MatDialog) {
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

  openFilmDetailPopup(film: Film): void {
    console.log('trying to open a popup');
    const dialogRef = this.dialog.open(FilmDetailPopupComponent, {
      width: '80%',
      data: film
    });
  }
  
}
