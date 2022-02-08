import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VillageComponent } from './pages/game/gui-components/village/village.component';
import { WorldMapComponent } from './pages/game/gui-components/world-map/world-map.component';
import { CityComponent } from './pages/game/gui-components/village/city/city.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GameComponent } from './pages/game/game.component';
import { StorehouseMenuComponent } from './pages/game/gui-components/village/city/components/storehouse-menu/storehouse-menu.component';
import { InnMenuComponent } from './pages/game/gui-components/village/city/components/inn-menu/inn-menu.component';
import { SchoolMenuComponent } from './pages/game/gui-components/village/city/components/school-menu/school-menu.component';
import { ResourcesComponent } from './pages/game/gui-components/village/resources/resources.component';
import { FarmsComponent } from './pages/game/gui-components/village/farms/farms.component';
import { MinesComponent } from './pages/game/gui-components/village/mines/mines.component';
import { UnderCityComponent } from './pages/game/gui-components/village/under-city/under-city.component';
import { GateComponent } from './pages/game/gui-components/village/gate/gate.component';
import { UpgradeMenuComponent } from './pages/game/gui-components/village/upgrade-menu/upgrade-menu.component';
import { ResourcesResolve } from './services/resources.resolve';
import { MainSiteComponent } from './pages/main-site/main-site.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

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
