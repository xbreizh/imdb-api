import { Component } from '@angular/core';
import { FilmCategory } from '../film-category.enum';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss']
})
export class CategoryButtonComponent {

  private _filmService: FilmService;

  constructor(_filmService: FilmService) {
    this._filmService = _filmService;
  }
  filmCategories: string[] = this.enumToArray(FilmCategory);
  selectedCategories: Set<string> = new Set<string>(); 


  filterByCategory(category: string) {
    const categoryEnumValue = FilmCategory[category as keyof typeof FilmCategory];

    if (this.selectedCategories.has(category)) {
      this.selectedCategories.delete(category);
    } else {
      this.selectedCategories.add(category);
    }

    this._filmService.updateGenre(Array.from(this.selectedCategories));
  }

  isCategorySelected(category: string): boolean {
    return this.selectedCategories.has(category);
  }

  enumToArray(enumObject: any): string[] {
    return Object.keys(enumObject).map(key => enumObject[key]);
  }

}
