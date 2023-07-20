import { Component } from '@angular/core';
import { FilmCategory } from '../film-category.enum';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html'
})
export class CategoryButtonComponent {
  filmCategories: string[] = enumToArray(FilmCategory); 
}

function enumToArray(enumObject: any): string[] {
  return Object.keys(enumObject).map(key => enumObject[key]);
}
