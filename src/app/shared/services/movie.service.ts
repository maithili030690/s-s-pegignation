import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  ImovieResponse, Isinglemovie } from '../models/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
API_CONFIG =environment.apiConfig

POPULAR_MOVIES_URL :string =`${this.API_CONFIG.baseUrl}/movie/popular`
  constructor(
    private _http:HttpClient
  ) { }
  fetchMovie(page:number):Observable<ImovieResponse<Isinglemovie>>{
    let params = new HttpParams()
                  .set("api_key",this.API_CONFIG.apikey)
                  .set("page",page)
                  .set("defaultLanguage", this.API_CONFIG.defaultLanguage)
    return this._http.get<ImovieResponse<Isinglemovie>>(this.POPULAR_MOVIES_URL,{
      params:params
    })
  }
  getMovieById(movieId:string):Observable<Isinglemovie>{
    let MOVIE_URL =`${this.API_CONFIG.baseUrl}/movie/${movieId}`
    let params = new HttpParams()
    .set("api_key",this.API_CONFIG.apikey)
    .set("defaultLanguage", this.API_CONFIG.defaultLanguage)
    return this._http.get<Isinglemovie>(MOVIE_URL,{params})
  }
}
