import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmFrameComponent } from './film-frame/film-frame.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ShuffleComponent } from './shuffle/shuffle.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LogoComponent } from './logo/logo.component';
import { CategoryButtonComponent } from './category-button/category-button.component';
import { FilmFormComponent } from './film-form/film-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewButtonComponent } from './new-button/new-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { FooterComponent } from './footer/footer.component';
import { CountryComponent } from './country/country.component';
import { RatingComponent } from './rating/rating.component';
import { DateSlideComponent } from './date-slide/date-slide.component'; 
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    FilmFrameComponent,
    FilmListComponent,
    FilmDetailComponent,
    ActorDetailComponent,
    SearchbarComponent,
    ShuffleComponent,
    LogoComponent,
    CategoryButtonComponent,
    FilmFormComponent,
    NewButtonComponent,
    SearchResultComponent,
    FooterComponent,
    CountryComponent,
    RatingComponent,
    DateSlideComponent,
  ],
  imports: [
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
