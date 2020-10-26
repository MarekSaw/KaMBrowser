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
import { VillageComponent } from './components/village/village.component';
import { WorldMapComponent } from './components/world-map/world-map.component';


@NgModule({
  declarations: [
    AppComponent,
    VillageComponent,
    WorldMapComponent
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


  ],
  providers: [
    MatIcon,
    MatGridList,
    MatGridTile
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
