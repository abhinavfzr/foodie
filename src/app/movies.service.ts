import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
   
  constructor(private http: HttpClient) { }
  getMovies(search) {
    console.log(search);
    return this.http.get(`https://developers.zomato.com/api/v2.1/search?q=${search}&apikey=4cc170fd23ef15dcd323963048d0b919`);
  }
   getdetails(id)
   {
    return this.http.get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}&apikey=4cc170fd23ef15dcd323963048d0b919`);
   }
  display() {
    return this.http.get("http://localhost:3000/posts");
  }
  
  
}
