import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilmFormComponent } from './film-form/film-form.component'; // Import your FilmFormComponent

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  openFilmFormDialog() {
    this.dialog.open(FilmFormComponent, {
      width: '30%', 
    });
  }
}
