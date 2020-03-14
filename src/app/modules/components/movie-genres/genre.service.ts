import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GenreModel } from './genre.model'

@Injectable()
export class GenreDataService {

    genreBehaviourSubject = new BehaviorSubject<{ genreData: GenreModel  , allGenresData : GenreModel[] }>({ genreData: null , allGenresData:[] });
    genreDataObservable = this.genreBehaviourSubject.asObservable();

    updateGenreData(newGenre : GenreModel , allGenresData:GenreModel[]) {
        this.genreBehaviourSubject.next({genreData : newGenre , allGenresData : allGenresData});
    }
}