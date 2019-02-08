import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { MoviesService } from "./movies.service";
import { SearchComponent } from './search/search.component'; //JS IMOPRT
import {FormsModule} from '@angular/forms';
import { FavdetailsComponent } from './favdetails/favdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FavoriteComponent,
    HomeComponent,
    SearchComponent,
    FavdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
