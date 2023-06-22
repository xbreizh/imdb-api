import { Injectable } from '@angular/core';
import { SearchCriteria } from './search-criteria';
import { Film } from './film';
import { FilmCategory } from './film-category.enum';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private films: Film[] = [
    {
      id: 1,
      title: 'Film 1',
      description: 'Description of Film 1',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://upload.wikimedia.org/wikipedia/fr/c/c0/Le_Voyage_fantastique_%28film%2C_1966%29.png'
    },
    {
      id: 2,
      title: 'Film 2',
      description: 'Description of Film 2',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2023/01/36649a3e-d3d8-4064-b657-f6b1afaba1d9/870x489_babylon.jpg'
    },
    {
      id: 1,
      title: 'Film 1',
      description: 'Description of Film 1',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://upload.wikimedia.org/wikipedia/fr/c/c0/Le_Voyage_fantastique_%28film%2C_1966%29.png'
    },
    {
      id: 2,
      title: 'Film 2',
      description: 'Description of Film 2',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2023/01/36649a3e-d3d8-4064-b657-f6b1afaba1d9/870x489_babylon.jpg'
    },
    {
      id: 1,
      title: 'Film 1',
      description: 'Description of Film 1',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://upload.wikimedia.org/wikipedia/fr/c/c0/Le_Voyage_fantastique_%28film%2C_1966%29.png'
    },
    {
      id: 2,
      title: 'Film 2',
      description: 'Description of Film 2',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2023/01/36649a3e-d3d8-4064-b657-f6b1afaba1d9/870x489_babylon.jpg'
    },
    {
      id: 1,
      title: 'Film 1',
      description: 'Description of Film 1',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://upload.wikimedia.org/wikipedia/fr/c/c0/Le_Voyage_fantastique_%28film%2C_1966%29.png'
    },
    {
      id: 2,
      title: 'Film 2',
      description: 'Description of Film 2',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2023/01/36649a3e-d3d8-4064-b657-f6b1afaba1d9/870x489_babylon.jpg'
    },
    {
      id: 1,
      title: 'Film 1',
      description: 'Description of Film 1',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://upload.wikimedia.org/wikipedia/fr/c/c0/Le_Voyage_fantastique_%28film%2C_1966%29.png'
    },
    {
      id: 2,
      title: 'Film 2',
      description: 'Description of Film 2',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2023/01/36649a3e-d3d8-4064-b657-f6b1afaba1d9/870x489_babylon.jpg'
    },
    {
      id: 1,
      title: 'Film 1',
      description: 'Description of Film 1',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://upload.wikimedia.org/wikipedia/fr/c/c0/Le_Voyage_fantastique_%28film%2C_1966%29.png'
    },
    {
      id: 2,
      title: 'Film 2',
      description: 'Description of Film 2',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2023/01/36649a3e-d3d8-4064-b657-f6b1afaba1d9/870x489_babylon.jpg'
    },
    {
      id: 1,
      title: 'Film 1',
      description: 'Description of Film 1',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://upload.wikimedia.org/wikipedia/fr/c/c0/Le_Voyage_fantastique_%28film%2C_1966%29.png'
    },
    {
      id: 2,
      title: 'Film 2',
      description: 'Description of Film 2',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2023/01/36649a3e-d3d8-4064-b657-f6b1afaba1d9/870x489_babylon.jpg'
    },
    {
      id: 1,
      title: 'Film 1',
      description: 'Description of Film 1',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://upload.wikimedia.org/wikipedia/fr/c/c0/Le_Voyage_fantastique_%28film%2C_1966%29.png'
    },
    {
      id: 2,
      title: 'Film 2',
      description: 'Description of Film 2',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2023/01/36649a3e-d3d8-4064-b657-f6b1afaba1d9/870x489_babylon.jpg'
    },
    {
      id: 1,
      title: 'Film 1',
      description: 'Description of Film 1',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://upload.wikimedia.org/wikipedia/fr/c/c0/Le_Voyage_fantastique_%28film%2C_1966%29.png'
    },
    {
      id: 2,
      title: 'Film 2',
      description: 'Description of Film 2',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2023/01/36649a3e-d3d8-4064-b657-f6b1afaba1d9/870x489_babylon.jpg'
    },
    {
      id: 1,
      title: 'Film 1',
      description: 'Description of Film 1',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://upload.wikimedia.org/wikipedia/fr/c/c0/Le_Voyage_fantastique_%28film%2C_1966%29.png'
    },
    {
      id: 2,
      title: 'Film 2',
      description: 'Description of Film 2',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2023/01/36649a3e-d3d8-4064-b657-f6b1afaba1d9/870x489_babylon.jpg'
    },

    {
      id: 1,
      title: 'Film 1',
      description: 'Description of Film 1',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://upload.wikimedia.org/wikipedia/fr/c/c0/Le_Voyage_fantastique_%28film%2C_1966%29.png'
    },
    {
      id: 2,
      title: 'Film 2',
      description: 'Description of Film 2',
      category: FilmCategory.Action,
      created: new Date(),
      posterUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2023/01/36649a3e-d3d8-4064-b657-f6b1afaba1d9/870x489_babylon.jpg'
    },
  ];

  constructor() { }

  getFilms(): Film[]{
    return this.films;
  }

  getFilmById(id: number){

  }

  getFilmByCriteria(criteria: SearchCriteria){

  }
}
