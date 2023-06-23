import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film';
import { FilmCategory } from '../film-category.enum';
import { CategoryService } from '../category.service';
import { SearchCriteria } from '../search-criteria';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films!: Film[];
  selectedCategory: FilmCategory = FilmCategory.None;
  searchCriteria: SearchCriteria | null = null;;

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
  }

  updateFilms(): void {
    if (this.selectedCategory === FilmCategory.None) {
      this.films = this._filmService.getFilms();
    } else {
      this.films = this._filmService.getFilmsByCategory(this.selectedCategory);
    }
  }
}


//   ngOnInit() {
//     this.films = this.filmService.getFilms();
//     this.categoryService.selectedCategory$.subscribe(category => {
//       this.selectedCategory = category;
//       // Update films based on the selected category
//       this.updateFilms();
//     });
//   }

//   updateFilms(): void {
//     // Update the films based on the selected category
//     // You can implement your logic here to filter films based on the category
//     console.log(this.selectedCategory);
//   }
// }
