import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import {  Isinglemovie } from '../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
movieId!:string;
movieObject!: Isinglemovie;
  constructor(
    private _routes:ActivatedRoute,
    private _movieservice:MovieService
  ) { }

  ngOnInit(): void {
    this.movieId = this._routes.snapshot.params['id'];//string
    console.log(this.movieId, typeof this.movieId)
    if(this.movieId){
      this._movieservice.getMovieById(this.movieId)
      .subscribe(res=>{
        this.movieObject =res
      })
    }
  }

}
