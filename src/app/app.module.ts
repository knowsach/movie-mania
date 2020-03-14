import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './modules/components/header/header.component';
import { GenreComponent } from './modules/components/movie-genres/genres.component';
import { MovieComponent } from './modules/components/movie/movie.component';
import { GenreService } from './services/genre/genre';
import { HttpClientModule } from '@angular/common/http'; 
import { LoaderComponent } from './modules/shared/loader/loader.component';
import { GenreDataService } from './modules/components/movie-genres/genre.service';
import { MovieService } from './services/movie/movie';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenreComponent,
    MovieComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    GenreComponent,
    MovieComponent,
    LoaderComponent
  ],
  providers: [GenreService , GenreDataService , MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
