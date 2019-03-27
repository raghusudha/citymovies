import { Component, OnInit } from '@angular/core';
import  MovieService  from '../movie.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.scss'],
})
export class MovieslistComponent implements OnInit {

  list:any=[];
  id: number;
  private sub: any;
  movie:any ={};
  constructor(private movieService:MovieService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // this.movie = {id:1,name:'Bahu bali 2', year:2017,image_url:'https://images-na.ssl-images-amazon.com/images/I/71q6iQTY-VL._SX466_.jpg',production_house:'ABC Movies',rating:5,type:'epic',language:'Telugu',date:'2017-10-01' };
  	//  this.sub = this.route.params.subscribe(params => {
    //    this.id = +params['id']; // (+) converts string 'id' to a number
    //    this.movieService.getRemoteMovieById(this.id).subscribe((customer)=>{this.movie = customer;});
    // });
    this.movieService.getRemoteMovies().subscribe((result) => {this.list = result;});
    this.list = this.movieService.getMovies();

    
  }
  // updateRemoteMovie(movie){
  //   this.movieService.updateRemoteMovie(movie).subscribe(()=>{this.router.navigate(['/payment']);});
  // }
  deleteMovie(movie){
    this.movieService.deleteRemoteMovie(movie).subscribe((e) => {
      this.movieService.getRemoteMovies().subscribe((result) => {this.list = result;});
    });
   this.list = this.movieService.getMovies();
  }
  onBooking(){
    this.router.navigate(['./payment']);
  }
  onOffers(){
    this.router.navigate(['./offers']);
  }

}