import { Component } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-shuffle',
  templateUrl: './shuffle.component.html',
  styleUrls: ['./shuffle.component.scss']
})
export class ShuffleComponent {

constructor(public filmService: FilmService){

}

shuffle(){
  this.filmService.shuffle();
}

}
