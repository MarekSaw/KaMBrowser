import { Component, OnInit } from '@angular/core';

export interface Tile {
  tileNumber: number;
  cols: number;
  rows: number;
  routerLink: string;
  className: string;
  imgId: number;
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit {

  pathStart = 'assets/buildings/';
  pathEnd = '.bmp';

  tiles: Tile[] = [
    // first row - tiles numbers: 0 - background, 0< buildings
    {tileNumber: 0, cols: 14, rows: 4, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 0, cols: 9, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 0, cols: 20, rows: 4, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 1, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 3, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 2, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 3, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 4, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 5, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 6, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 7, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 0, cols: 9, rows: 1, routerLink: '', className: 'grid-background', imgId: 0},

    // second row
    {tileNumber: 0, cols: 17, rows: 2, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 0, cols: 3, rows: 1, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 0, cols: 23, rows: 2, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 8, cols: 3, rows: 3, routerLink: '/game/storehouse_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 9, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 10, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 11, cols: 4, rows: 3, routerLink: '/game/inn_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 12, cols: 3, rows: 3, routerLink: '/game/school_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 13, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 14, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 15, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 0, cols: 3, rows: 1, routerLink: '', className: 'grid-background', imgId: 0},

    // third row
    {tileNumber: 0, cols: 43, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 16, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 17, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 18, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 19, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 3, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 20, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 21, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 22, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 23, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 24, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},

    // fourth row
    {tileNumber: 0, cols: 43, rows: 2, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 25, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 26, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 27, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 28, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 3, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 29, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 30, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 31, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 32, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 33, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component', imgId: 0},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
    {tileNumber: 0, cols: 43, rows: 3, routerLink: '', className: 'grid-background', imgId: 0},
  ];

  public isMenuOpen = false;
  public iframeLink: string;

  constructor() { }

  public openMenu(tile: Tile): void {
    this.iframeLink = tile.routerLink;
    this.isMenuOpen = !this.isMenuOpen;
}

  ngOnInit(): void {
  }

}
