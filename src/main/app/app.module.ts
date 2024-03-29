import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridList, MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import {VillageComponent} from './pages/game/gui-components/village/village.component';
import {WorldMapComponent} from './pages/game/gui-components/world-map/world-map.component';
import {CityComponent} from './pages/game/gui-components/village/city/city.component';
import {ContactComponent} from './pages/contact/contact.component';
import {GameComponent} from './pages/game/game.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {StorehouseMenuComponent} from './pages/game/gui-components/village/city/components/storehouse-menu/storehouse-menu.component';
import {InnMenuComponent} from './pages/game/gui-components/village/city/components/inn-menu/inn-menu.component';
import {SchoolMenuComponent} from './pages/game/gui-components/village/city/components/school-menu/school-menu.component';
import {ResourcesComponent} from './pages/game/gui-components/village/resources/resources.component';
import {FarmsComponent} from './pages/game/gui-components/village/farms/farms.component';
import {MinesComponent} from './pages/game/gui-components/village/mines/mines.component';
import {GateComponent} from './pages/game/gui-components/village/gate/gate.component';
import {UnderCityComponent} from './pages/game/gui-components/village/under-city/under-city.component';
import {MessageComponent} from './Messages/message/message.component';
import {UpgradeMenuComponent} from './pages/game/gui-components/village/upgrade-menu/upgrade-menu.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogAddingResourcesComponent} from './pages/game/gui-components/village/dialog-adding-resources.component';
import {CountdownModule} from 'ngx-countdown';
import {PageLoadingComponent} from './components/page-loading/page-loading.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {MainSiteComponent} from './pages/main-site/main-site.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    VillageComponent,
    WorldMapComponent,
    CityComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    GameComponent,
    MainSiteComponent,
    PageNotFoundComponent,
    MainNavComponent,
    StorehouseMenuComponent,
    InnMenuComponent,
    SchoolMenuComponent,
    ResourcesComponent,
    FarmsComponent,
    MinesComponent,
    GateComponent,
    UnderCityComponent,
    MessageComponent,
    UpgradeMenuComponent,
    DialogAddingResourcesComponent,
    PageLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    FormsModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
    CountdownModule,
  ],
  providers: [
    MatIcon,
    MatGridList,
    MatGridTile
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
