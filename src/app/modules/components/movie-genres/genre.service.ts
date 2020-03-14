import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GenreModel } from './genre.model'

@Injectable()
export class GenreDataService {

    genreBehaviourSubject = new BehaviorSubject<{ genreData: GenreModel }>({ genreData: null });
    genreDataObservable = this.genreBehaviourSubject.asObservable();

    updateGenreData(newGenre : GenreModel) {
        this.genreBehaviourSubject.next({genreData : newGenre});
    }
}