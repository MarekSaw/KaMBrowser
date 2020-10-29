import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridList, MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import { VillageComponent } from './components/game/gui-components/village/village.component';
import { WorldMapComponent } from './components/game/gui-components/world-map/world-map.component';
import { CityComponent } from './components/game/gui-components/village/city/city.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { GameComponent } from './components/game/game.component';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MainNavComponent} from "./components/main-nav/main-nav.component";
import {LayoutModule} from "@angular/cdk/layout";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";


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
    MainNavComponent
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
  ],
  providers: [
    MatIcon,
    MatGridList,
    MatGridTile
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
