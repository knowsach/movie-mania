import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from './modules/components/movie-genres/genres.component';
import { MovieComponent } from './modules/components/movie/movie.component';


const routes: Routes = [
  {path:'' , component : GenreComponent},
  {path : 'movies' , component : MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
