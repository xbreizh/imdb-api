import { Component, Input } from '@angular/core';
import { Film } from '../film';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-film-frame',
  templateUrl: './film-frame.component.html',
  styleUrls: ['./film-frame.component.scss']
})
export class FilmFrameComponent {
  @Input() film!: Film;
  dateFormat: string = 'dd-MM-yyyy';

  constructor(private datePipe: DatePipe) {
  }


  getFormattedDate(date: Date | null): string {
    if (date) {
      return this.datePipe.transform(date, this.dateFormat) || '';
    } else {
      return '';
    } 
  }

}
