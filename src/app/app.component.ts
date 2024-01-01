import { Movie } from './movie';
import { MovieService } from './service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'moviesAng';
  movies: Movie[] = [];

  constructor(public movieService:  MovieService){}

  ngOnInit(): void {
    this.movieService.getMoviesList().subscribe(data =>{
           this.movies = data;
           console.log(data);})

  }



}
