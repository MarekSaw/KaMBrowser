import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VillageComponent} from './components/village/village.component';
import {WorldMapComponent} from './components/world-map/world-map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'village',
    pathMatch: 'full'
  },
  {
    path: 'village',
    component: VillageComponent
  },
  {
    path: 'world_map',
    component: WorldMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
