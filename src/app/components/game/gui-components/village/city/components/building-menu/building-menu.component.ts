import { Component, OnInit } from '@angular/core';

export interface Building {
  imgSource: string;
  imgAlt: string;
  resourceInfo: string;
}

@Component({
  selector: 'app-building-menu',
  templateUrl: './building-menu.component.html',
  styleUrls: ['./building-menu.component.css']
})
export class BuildingMenuComponent implements OnInit {

  buildings: Building[] = [
    {imgSource: 'assets/buildings/8.bmp', imgAlt: 'Stable', resourceInfo: 'Planks: 6 Stone: 10  Time: 30 seconds'},
    {imgSource: 'assets/buildings/9.bmp', imgAlt: 'Mill', resourceInfo: 'Planks: 3 Stone: 2  Time: 30 seconds'},
    {imgSource: 'assets/buildings/19.bmp', imgAlt: 'Bakery', resourceInfo: 'Planks: 4 Stone: 6  Time: 30 seconds'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
