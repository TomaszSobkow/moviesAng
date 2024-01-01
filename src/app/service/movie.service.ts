import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url="http://localhost:8080/api/movies/getMovies";

  constructor(private httpClient: HttpClient) { }

  getMoviesList(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.url)
  }
}
