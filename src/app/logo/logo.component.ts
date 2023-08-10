import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  constructor(
    private router: Router,
    private filmService: FilmService
    ) {

  }

  goBackToList(): void {
    this.router.navigate(['/']);
    this.filmService.resetSearchCriteria();
  }
}
