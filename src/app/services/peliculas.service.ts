import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class PeliculasService {
  peliculasTotal: any;
  peliculasOrdenadas: any;
  pelicula: any;
  apiURL = "https://api.themoviedb.org/3/movie/";
  language = 'es-ES';

  constructor(private httpClient: HttpClient) {}

  getPopular() {
    const url = `${this.apiURL}popular?${environment.apiKey}&language=${this.language}`;
    return this.httpClient.get(url).pipe(map((data: any) =>{
      return data.results.slice(0, 5);
    }));
  }

  getTopRated(page?) {
    
    const url = `${this.apiURL}top_rated?${environment.apiKey}&language=${this.language}`;
      return this.httpClient.get(url).pipe(map((data:any) => {
        return data.results;}));
   }

  getPelicula(id) {
    const url = `${this.apiURL}${id}?${environment.apiKey}&language=${this.language}`;
    console.log(url);
    return this.httpClient.get(url);
   }

  getCredits(id) {
    const url = `${this.apiURL}${id}/credits?${environment.apiKey}&language=${this.language}`;
    return this.httpClient.get(url).pipe(map((res:any) => {
      return res.cast;
    }));
  }
}
