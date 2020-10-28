import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Resources', cols: 1, rows: 2, color: 'rgba(10,10,100,0.5)'},
    {text: 'Mines', cols: 1, rows: 1, color: 'rgba(10,100,100,0.5)'},
    {text: 'Gate', cols: 1, rows: 4, color: 'rgba(100,10,10,0.5)'},
    {text: 'City', cols: 1, rows: 2, color: 'rgba(100,100,100,0.5)'},
    {text: 'Farms', cols: 1, rows: 2, color: 'rgba(10,100,10,0.5)'},
    {text: 'UnderCity', cols: 1, rows: 1, color: 'rgba(255,255,255,0.5)'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
