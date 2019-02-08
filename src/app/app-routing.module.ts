import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { SearchComponent } from "./search/search.component";
import { FavdetailsComponent} from "./favdetails/favdetails.component";



const routes: Routes = [ {
  path: "home", component: HomeComponent
},
{
  path: "favorite", component: FavoriteComponent
},
{
  path: "favdetails", component: FavdetailsComponent
},
{
  path: "search/:name", component: SearchComponent
},
{
  path: "**", component: HomeComponent 
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
