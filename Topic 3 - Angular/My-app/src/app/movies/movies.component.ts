import { Component, OnInit } from '@angular/core';
import { Movie } from '../classes/movie';
import { MoviesDataService } from '../services/movies-data.services';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesDataService]
})

export class MoviesComponent implements OnInit {

  movies: Movie[];
  selectedMovie: Movie;

  constructor(private _moviesDataService: MoviesDataService) { }

  ngOnInit() {
    this._moviesDataService.writeMoviesOnce();
    this.movies = this._moviesDataService.getMovies();
  }

  onSelect(movie: Movie) : void {
    this.selectedMovie = movie;
  }

}
