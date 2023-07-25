import { Component } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-new-button',
  templateUrl: './new-button.component.html',
  styleUrls: ['./new-button.component.scss']
})
export class NewButtonComponent {
  constructor(private dialogService: DialogService) {}

  openDialog() {
    this.dialogService.openFilmFormDialog();
  }

}


