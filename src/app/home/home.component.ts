import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchComponent } from '../search/search.component';
import { Router } from '@angular/router'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movie: MoviesService, private http: HttpClient, private router: Router) { }

  arrayOfMovies = [];
  ngOnInit() {
    
  }
   get(search)
   {
     console.log(search);

    this.movie.getMovies(search).subscribe((data: any) => {
      console.log(data)
       data.restaurants= data.restaurants.map(e =>  { 
       return e;
        })
        this.arrayOfMovies = data.restaurants
    })
    
   }

  add(movie) {
    return this.http.post("http://localhost:3000/posts", { 
    "restaurent_name":  movie.name,
    "restaurent_img": movie.featured_image,
    "restaurent_location": movie.location.address
      }).subscribe(console.log);
   
  }
    
  gotSearch(name) {
    this.router.navigateByUrl(`search/${name}`)
  }
  
}
