import { Injectable } from "@angular/core";
import { environment, Api } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GenreService {

    url = environment.apiUrl;
    api_key = Api.api_key;

    constructor(private http : HttpClient){}

    getMovieGenreList(){
        return this.http.get(`${this.url}/genre/movie/list?api_key=${this.api_key}`);
    }
}