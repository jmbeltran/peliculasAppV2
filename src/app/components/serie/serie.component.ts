import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SeriesService } from "../../services/series.service";

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  idSerie = '';
  serie: any = {};
  urlFondo: string;
  urlPoster:string;
  loading:boolean=true;
  lastSeason: any = {};
  lastSeasonName:string;
  numberSeasons:number;
 
  constructor(private route: ActivatedRoute, private router: Router,
    private seriesService: SeriesService) { }

    ngOnInit() {
      this.route.queryParams.subscribe((params: any) => {
        this.idSerie = params.id;
        this.seriesService.getSerie(this.idSerie).subscribe((data: any) => {
            this.serie = data;
            console.log(this.serie),
            this.numberSeasons = this.serie.number_of_seasons;
            this.urlFondo ='https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' +
              this.serie.backdrop_path;
              this.urlPoster='https://image.tmdb.org/t/p/w220_and_h330_face/'+
              this.serie.poster_path;
              console.log('Temporadas: ',this.numberSeasons);
              this.seriesService.getLastSeasons(this.idSerie,this.numberSeasons).subscribe((data:any) => {
                this.lastSeason = data;
                this.lastSeasonName = data.name;
                console.log("Datos de la temporada: ",this.lastSeason);
                this.loading=false;
             }); 
            }),
          (error: any) => {
            console.log(error);
          };
        });
    }
  
}
  