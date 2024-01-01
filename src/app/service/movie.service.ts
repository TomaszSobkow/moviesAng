import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url="";

  constructor(private httpClient: HttpClient) { }

  geMoviesList(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.url)
  }
}
