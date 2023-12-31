import { Component, Input } from '@angular/core';
import { Film } from '../film';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FilmDetailPopupComponent } from '../film-detail-popup/film-detail-popup.component';

@Component({
  selector: 'app-film-frame',
  templateUrl: './film-frame.component.html',
  styleUrls: ['./film-frame.component.scss']
})
export class FilmFrameComponent {

  @Input() film!: Film;
  dateFormat: string = 'dd-MM-yyyy';
  dialogRef!: MatDialogRef<FilmDetailPopupComponent>;
  popupOpened: boolean = false;
  showTitle: boolean = false;
  showDescription: boolean = false;

  constructor(
    private datePipe: DatePipe,
    private dialog: MatDialog
  ) {
  }


  showElements(): void {
    this.showTitle = true;
    this.showDescription = true;
  }

  hideElements(): void {
    this.showTitle = false;
    this.showDescription = false;
  }

  openPopup(): void {
    if (!this.popupOpened) {
      console.log('trying to open a popup');
      this.dialogRef = this.dialog.open(FilmDetailPopupComponent, {
        width: '80%',
        data: this.film
      });
      this.popupOpened = true;
    }
  }

  closePopup(): void {
    console.log('closing the popup');
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    //this.popupOpened = false;
  }
  over() {
    console.log("Mouseover called");
  }

  out() {
    console.log("Mouseout called");
  }
}
