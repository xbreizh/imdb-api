import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Film } from '../film';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-film-detail-popup',
  templateUrl: './film-detail-popup.component.html',
})
export class FilmDetailPopupComponent {
  dateFormat: string = 'dd-MM-yyyy';
  constructor(
    @Inject(MAT_DIALOG_DATA) public film: Film,
    private datePipe: DatePipe
  ) { }

  getFormattedDate(date: Date | null): string {
    if (date) {
      return this.datePipe.transform(date, this.dateFormat) || '';
    } else {
      return '';
    }
  }
}
