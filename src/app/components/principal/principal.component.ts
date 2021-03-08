import { Component, OnInit } from '@angular/core';
//import series from '../../../assets/series.json';
import { ActivatedRoute, Router } from "@angular/router";
import { PeliculasService } from "../../services/peliculas.service";
import { SeriesService } from "../../services/series.service"

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  peliculasData: any;
  seriesData: any;

  constructor(private router: Router, private peliculasService: PeliculasService, private seriesService:SeriesService) { }

  ngOnInit() {
    this.peliculasService.getPopular().subscribe( (data: any) => {
      this.peliculasData = data;});
    this.seriesService.getTopRated().subscribe( (data: any) => {
        this.seriesData = data;});
    
  }

  sendParamsMovie(id, categoria, titulo) {
   this.router.navigate(['/pelicula'], {queryParams: {'id': id, 'titulo': titulo}});
  }

  sendParamsTv(id) {
   this.router.navigate(['/serie'], {queryParams: {'id': id}});
  }

}
