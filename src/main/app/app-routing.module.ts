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
import {UpgradeMenuComponent} from './components/game/gui-components/village/upgrade-menu/upgrade-menu.component';
import {ResourcesResolve} from './services/resources.resolve';

const routes: Routes = [
  { path: '', component: MainSiteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'game', component: GameComponent, resolve: { resources: ResourcesResolve }, children: [
      { path: '', redirectTo: 'village', pathMatch: 'full' },
      { path: 'village', component: VillageComponent },
          { path: 'village/upgrade-menu', component: UpgradeMenuComponent},
          { path: 'village/city', component: CityComponent },
              { path: 'village/city/storehouse-menu', component: StorehouseMenuComponent },
              { path: 'village/city/inn-menu', component: InnMenuComponent },
              { path: 'village/city/school-menu', component: SchoolMenuComponent },
          { path: 'village/resources', component: ResourcesComponent },
          { path: 'village/farms', component: FarmsComponent},
          { path: 'village/mines', component: MinesComponent },
          { path: 'village/underCity', component: UnderCityComponent },
          { path: 'village/gate', component: GateComponent },
      { path: 'world_map', component: WorldMapComponent }
    ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ResourcesResolve],
  exports: [RouterModule]
})
export class AppRoutingModule { }
