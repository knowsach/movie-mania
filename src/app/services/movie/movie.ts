import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

    url = environment.apiUrl;
    api_key = environment.api_key;

    constructor(private http: HttpClient) { }

    getMovieList(genreId: any, page: number) {
        return this.http.get(`${this.url}/discover/movie?api_key=${this.api_key}&with_genres=${genreId}&page=${page}`);
    }
}