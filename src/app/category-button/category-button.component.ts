import { Component } from '@angular/core';
import { FilmCategory } from '../film-category.enum';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html'
})
export class CategoryButtonComponent {

  private _filmService: FilmService;

  constructor(_filmService: FilmService){
    this._filmService = _filmService;
  }
  filmCategories: string[] = enumToArray(FilmCategory); 

  filterByCategory(category: string){
    const categoryEnumValue = FilmCategory[category as keyof typeof FilmCategory];
    
    // Check if the category is a valid value from the FilmCategory enum
    if (categoryEnumValue) {
      this._filmService.getFilmsByCategory(categoryEnumValue);
    } else {
      // If the category is not a valid enum value, pass "All" to get all films
      this._filmService.getFilmsByCategory(FilmCategory.All);
    }
  }
}

function enumToArray(enumObject: any): string[] {
  return Object.keys(enumObject).map(key => enumObject[key]);
}
