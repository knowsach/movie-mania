import { Component } from '@angular/core';
import { GenreDataService } from '../movie-genres/genre.service';
import { GenreModel } from '../movie-genres/genre.model';
import { MovieService } from 'src/app/services/movie/movie';
import { Router } from '@angular/router';
import { MovieModel } from './movie.model';

@Component({
    selector: 'movie',
    templateUrl: './movie.html'
})

export class MovieComponent {

    selectedGenre: GenreModel;
    allGenresList: GenreModel[];
    allMovieList: MovieModel[];
    loader: boolean;
    responseData: any;

    constructor(
        private genreDataService: GenreDataService,
        private movieService: MovieService,
        public router: Router,
    ) {

        this.loader = false;
        this.selectedGenre = new GenreModel();
        this.allGenresList = new Array<GenreModel>();
        this.allMovieList = new Array<MovieModel>();
        this.responseData = {
            page: 1,
            total_results: 1,
            total_pages: 1
        };

        this.genreDataService.genreDataObservable.subscribe(
            response => {
                console.log(response.genreData, response.allGenresData);
                this.selectedGenre = response.genreData;
                this.allGenresList = response.allGenresData;
                if (this.selectedGenre)
                    this.getMovieList();
                else
                    this.router.navigate(['']);
            }
        );
    }

    getMovieList() {
        this.loader = true;
        this.movieService.getMovieList(this.selectedGenre.id , this.responseData.page)
            .subscribe(
                response => {
                    this.responseData = response;
                    this.allMovieList = response['results'];
                    console.log('movie list:', response, this.allMovieList);
                    this.loader = false;
                },
                err => {
                    console.log('error:', err);
                    this.loader = false;
                }
            )
    }

    onGenreChnage(selectedGenre) {
        this.selectedGenre = selectedGenre;
        this.getMovieList();
    }

    onPageChange(event) {
        console.log('page changed:', event);
        this.responseData.page = event;
        this.getMovieList();
    }
}