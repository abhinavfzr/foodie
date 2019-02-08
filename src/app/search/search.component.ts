import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MoviesService } from "../movies.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movie: MoviesService, private http: HttpClient,   private route: ActivatedRoute,
    private router: Router) { }
   movieDetails: any ;
    

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('name');
    console.log(id);
    this.movie.getdetails(id).subscribe((data: any) => {
      console.log(data)
      this.movieDetails = data;
    })
  }
   
  add(movieDetails) {
    return this.http.post("http://localhost:3000/posts", { 
    "restaurent_name":  movieDetails.name,
    "restaurent_img": movieDetails.featured_image,
    "restaurent_location": movieDetails.location.address
      }).subscribe(console.log);
   
  }
}