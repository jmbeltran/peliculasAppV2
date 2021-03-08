import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {
  peliculasData: any;
  constructor(private router: Router, private peliculasService: PeliculasService) { 
  }

  ngOnInit() {
    this.peliculasService.getTopRated().subscribe((data:any) => {
      this.peliculasData = data;
     }), (error: any) => {
      console.log(error);
    };
  }

  sendParams(id, titulo,titulo_original) {
    this.router.navigate(['/pelicula'], {queryParams: {'id': id, 'titulo': titulo, 'titulo_original':titulo_original}});
   }
}
