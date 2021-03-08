import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SeriesService } from "../../services/series.service";

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})

export class SeriesListComponent implements OnInit {
  seriesData: any;
  constructor(private router: Router, private seriesService: SeriesService) { 
  }

  ngOnInit() {
    this.seriesService.getPopular().subscribe((data:any) => {
      this.seriesData = data;
    }), (error: any) => {
      console.log(error);
    };
  }
  sendParams(id) {
    this.router.navigate(['/serie'], {queryParams: {'id': id}});
  }
}
