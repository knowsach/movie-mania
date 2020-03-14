import { Component } from '@angular/core';
import { GenreDataService } from '../movie-genres/genre.service';
import { GenreModel } from '../movie-genres/genre.model';
import { MovieService } from 'src/app/services/movie/movie';
import { Router } from '@angular/router';

@Component({
    selector: 'movie',
    templateUrl: './movie.html'
})

export class MovieComponent {

    selectedGenre: GenreModel;
    loader: boolean;

    constructor(
        private genreDataService: GenreDataService,
        private movieService: MovieService,
        public router: Router
    ) {

        this.loader = false;
        this.selectedGenre = new GenreModel();

        this.genreDataService.genreDataObservable.subscribe(
            response => {
                console.log(response.genreData);
                this.selectedGenre = response.genreData;
                if (this.selectedGenre)
                    this.getMovieList();
                else
                    this.router.navigate(['']);
            }
        );
    }

    getMovieList() {
        this.loader = true;
        this.movieService.getMovieList(this.selectedGenre.id)
            .subscribe(
                response => {
                    console.log('movie list:', response);
                    this.loader = false;
                },
                err => {
                    console.log('error:', err);
                    this.loader = false;
                }
            )
    }
}