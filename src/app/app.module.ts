import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmFrameComponent } from './film-frame/film-frame.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FilmFrameComponent,
    FilmListComponent,
    FilmDetailComponent,
    ActorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
