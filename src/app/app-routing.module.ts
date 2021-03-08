import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SerieComponent } from './components/serie/serie.component';
import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  //{ path: '', component: PrincipalComponent },
  { path: 'inicio', component: PrincipalComponent},
  { path: 'peliculasList', component: PeliculasListComponent },
  { path: 'pelicula', component: PeliculaComponent},
  { path: 'seriesList', component: SeriesListComponent},
  { path: 'serie', component: SerieComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
