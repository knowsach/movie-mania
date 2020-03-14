import { Component } from '@angular/core';
import { GenreService } from 'src/app/services/genre/genre';
import { GenreModel } from './genre.model';
import { GenreDataService } from './genre.service';
import { Router } from '@angular/router';

@Component({
    selector: 'genre',
    templateUrl: './genres.html'
})

export class GenreComponent {

    loader: boolean;
    movieGenreList: GenreModel[];

    constructor(
        private genreService: GenreService,
        private genreDataService : GenreDataService,
        public router : Router
        ) {
        this.loader = false;
        this.movieGenreList = new Array<GenreModel>();
    }

    ngOnInit() {
        this.getMovieGenresList();
    }

    getMovieGenresList() {
        this.loader = true;

        this.genreService.getMovieGenreList()
            .subscribe(
                response => {
                    this.movieGenreList = response['genres'];
                    console.log('genres:', this.movieGenreList);
                    this.loader = false;
                },
                err => {
                    console.log('error:', err);
                    this.loader = false;
                }
            );
    }

    onGenreSelect(genreData: GenreModel) {
        console.log('genre selected:', genreData);
        this.genreDataService.updateGenreData(genreData);
        this.router.navigate(['/movies']);
    }
}