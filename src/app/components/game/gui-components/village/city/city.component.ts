import { Component, OnInit } from '@angular/core';

export interface Tile {
  tileNumber: number;
  cols: number;
  rows: number;
  routerLink: string;
  className: string;
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit {
  tiles: Tile[] = [
    // first row - tiles numbers: 0 - background, 0< buildings
    {tileNumber: 0, cols: 14, rows: 4, routerLink: '', className: 'grid-background'},
    {tileNumber: 0, cols: 9, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 0, cols: 20, rows: 4, routerLink: '', className: 'grid-background'},
    {tileNumber: 1, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 3, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 2, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 3, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 4, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 5, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 6, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 7, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 0, cols: 9, rows: 1, routerLink: '', className: 'grid-background'},

    // second row
    {tileNumber: 0, cols: 17, rows: 2, routerLink: '', className: 'grid-background'},
    {tileNumber: 0, cols: 3, rows: 1, routerLink: '', className: 'grid-background'},
    {tileNumber: 0, cols: 23, rows: 2, routerLink: '', className: 'grid-background'},
    {tileNumber: 8, cols: 3, rows: 3, routerLink: '/game/storehouse_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 9, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 10, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 11, cols: 4, rows: 3, routerLink: '/game/inn_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 12, cols: 3, rows: 3, routerLink: '/game/school_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 13, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 14, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 15, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 0, cols: 3, rows: 1, routerLink: '', className: 'grid-background'},

    // third row
    {tileNumber: 0, cols: 43, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 16, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 17, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 18, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 19, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 3, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 20, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 21, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 22, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 23, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 24, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},

    // fourth row
    {tileNumber: 0, cols: 43, rows: 2, routerLink: '', className: 'grid-background'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 25, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 26, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 27, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 28, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 3, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 29, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 30, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 31, cols: 3, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 32, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 1, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 33, cols: 4, rows: 3, routerLink: '/game/building_menu', className: 'grid-component'},
    {tileNumber: 0, cols: 2, rows: 3, routerLink: '', className: 'grid-background'},
    {tileNumber: 0, cols: 43, rows: 3, routerLink: '', className: 'grid-background'},
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
