import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VillageComponent} from './components/game/gui-components/village/village.component';
import {WorldMapComponent} from './components/game/gui-components/world-map/world-map.component';
import {CityComponent} from './components/game/gui-components/village/city/city.component';
import {MainSiteComponent} from './components/main-site/main-site.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ContactComponent} from './components/contact/contact.component';
import {GameComponent} from './components/game/game.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {StorehouseMenuComponent} from './components/game/gui-components/village/city/components/storehouse-menu/storehouse-menu.component';
import {InnMenuComponent} from './components/game/gui-components/village/city/components/inn-menu/inn-menu.component';
import {SchoolMenuComponent} from './components/game/gui-components/village/city/components/school-menu/school-menu.component';
import {ResourcesComponent} from './components/game/gui-components/village/resources/resources.component';
import {FarmsComponent} from './components/game/gui-components/village/farms/farms.component';
import {MinesComponent} from './components/game/gui-components/village/mines/mines.component';
import {UnderCityComponent} from './components/game/gui-components/village/under-city/under-city.component';
import {GateComponent} from './components/game/gui-components/village/gate/gate.component';
import {BuildFarmComponent} from './components/game/gui-components/village/farms/farms-components/build-farm/build-farm.component';
import {FishermanComponent} from './components/game/gui-components/village/farms/farms-components/fisherman/fisherman.component';
import {BuildVineyardComponent} from './components/game/gui-components/village/farms/farms-components/build-vineyard/build-vineyard.component';
import {BuildingMenuComponent} from './components/game/gui-components/village/building-menu/building-menu.component';
import {BuildFishermanComponent} from './components/game/gui-components/village/farms/farms-components/build-fisherman/build-fisherman.component';

const routes: Routes = [
  { path: '', component: MainSiteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'game', component: GameComponent, children: [
      { path: '', redirectTo: 'village', pathMatch: 'full' },
      { path: 'village', component: VillageComponent },
          { path: 'village/building-menu', component: BuildingMenuComponent },
          { path: 'village/city', component: CityComponent },
              { path: 'storehouse_menu', component: StorehouseMenuComponent },
              { path: 'inn_menu', component: InnMenuComponent },
              { path: 'school_menu', component: SchoolMenuComponent },
          { path: 'village/resources', component: ResourcesComponent },
          { path: 'village/farms', component: FarmsComponent},
              {path: 'village/farms/build-farm', component: BuildFarmComponent},
              {path: 'village/farms/build-vineyard', component: BuildVineyardComponent},
              {path: 'village/farms/build-fisherman', component: BuildFishermanComponent},

          { path: 'village/mines', component: MinesComponent },
          { path: 'village/underCity', component: UnderCityComponent },
          { path: 'village/gate', component: GateComponent },


      { path: 'world_map', component: WorldMapComponent }
    ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
