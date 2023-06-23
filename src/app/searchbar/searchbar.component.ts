import { Component } from '@angular/core';
import { FilmCategory } from '../film-category.enum';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  categories = Object.values(FilmCategory);
  
  constructor(public categoryService: CategoryService) {
  }

  selectCategory(category: FilmCategory): void {
    console.log('new cat selection from search ' + category);
    this.categoryService.setSelectedCategory(category);
  }
}
