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
import { FilmPojoComponent } from './film-pojo/film-pojo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LogoComponent } from './logo/logo.component';
import { CategoryButtonComponent } from './category-button/category-button.component';
import { FilmFormComponent } from './film-form/film-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewButtonComponent } from './new-button/new-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add this line


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
    LogoComponent,
    CategoryButtonComponent,
    FilmFormComponent,
    NewButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
