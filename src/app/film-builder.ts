// film-builder.ts
import { Film } from './film'; // Import the Film interface from your existing file

export class FilmBuilder {
  private film: Film = {};

  withTitle(title: string): FilmBuilder {
    this.film.Title = title;
    return this;
  }

  withYear(year: string): FilmBuilder {
    this.film.Year = year;
    return this;
  }

  withPlot(plot: string): FilmBuilder {
    this.film.Plot = plot;
    return this;
  }

  withPoster(poster: string): FilmBuilder {
    this.film.Poster = poster;
    return this;
  }

  withImdbId(imdbId: string): FilmBuilder {
    this.film.imdbID = imdbId;
    return this;
  }
  // Add other builder methods for other properties

  build(): Film {
    return this.film;
  }
}
