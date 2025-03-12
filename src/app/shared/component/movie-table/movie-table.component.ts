import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MatTableDataSource } from '@angular/material/table';

import { PageEvent } from '@angular/material/paginator';
import { Router, Routes } from '@angular/router';
import { Isinglemovie } from '../../models/movie';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent implements OnInit {
displayedColumns: string[] = ['poster', 'title', 'release_date', 'rating'];
currentPage:number =1;
totalMovies:number =0;
pageSize:number =20;
dataSource = new MatTableDataSource<Isinglemovie>()
  constructor(
    private _movieService:MovieService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  this.fetchMovies(this.currentPage)
  }
  fetchMovies(page:number){
    this._movieService.fetchMovie(page)
    .subscribe(res=>{
      console.log(res)  //res.result
      this.dataSource.data =res.results
      this.totalMovies=res.total_results
    })
  }
  onPageChange(event:PageEvent){
    console.log(event)
    this.currentPage=event.pageIndex+1
    this.fetchMovies(this.currentPage)
  }
  navigatetomovie(row:Isinglemovie){
    console.log(row)
    this._router.navigate(['movies',row.id])
  }
}
