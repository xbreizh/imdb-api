import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilmCategory } from './film-category.enum';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private selectedCategorySubject: BehaviorSubject<FilmCategory> = new BehaviorSubject<FilmCategory>(FilmCategory.None);
  selectedCategory$: Observable<FilmCategory> = this.selectedCategorySubject.asObservable();

  setSelectedCategory(category: FilmCategory): void {
    console.log('updated cat from service ' + category);
    this.selectedCategorySubject.next(category);
  }
}
