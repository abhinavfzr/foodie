import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  var1 : any = [];
  constructor(private http: HttpClient, private moviesService: MoviesService) { }
  
  ngOnInit() {
    this.displayimg();
}
displayimg() {
  this.moviesService.display().subscribe((x) => {
    this.var1 = x,
    console.log(this.var1)
  });
}
remove(id) {
  console.log(id);
  return this.http.delete('http://localhost:3000/posts/'+id).subscribe(console.log),
  this.var1=this.var1.filter(x=>id!=x.id);
  
}
}