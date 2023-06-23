import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-film-detail-popup',
  template: `
    <h1>{{ data }}</h1>
  `
})
export class FilmDetailPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
