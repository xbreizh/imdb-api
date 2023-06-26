import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  constructor(
    private router: Router
    ) {

  }

  goBackToList(): void {
    this.router.navigate(['/']);
  }
}
