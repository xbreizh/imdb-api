import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmFrameComponent } from './film-frame/film-frame.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { DatePipe } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ShuffleComponent } from './shuffle/shuffle.component';
import { FilmPojoComponent } from './fil-pojo/film-pojo.component';
import { FilmDetailPopupComponent } from './film-detail-popup/film-detail-popup.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    FilmFrameComponent,
    FilmListComponent,
    FilmDetailComponent,
    ActorDetailComponent,
    SearchbarComponent,
    ShuffleComponent,
    FilmPojoComponent,
    FilmDetailPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
