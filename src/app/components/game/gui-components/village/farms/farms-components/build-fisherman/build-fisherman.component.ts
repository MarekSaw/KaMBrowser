import { Component, OnInit } from '@angular/core';

export interface BuildingInfo {
  image: string;
  description: string;
  // inputImg[]: string;
  // outputImg[]: string;
  // time: number;
  workers: number;
  planks: number;
  stone: number;
}

@Component({
  selector: 'app-build-fisherman',
  templateUrl: './build-fisherman.component.html',
  styleUrls: ['./build-fisherman.component.css']
})
export class BuildFishermanComponent implements OnInit {

  buildingInfo: BuildingInfo = {
    image: 'assets/buildings/26.bmp',
    description: 'Fisherman\'s hut produces fish for our merchant. The fisherman casts his hook into a lake every morning and brings fresh fish onto our tables. Fisherman\'s hut can be placed only nearby water reservoir.',
    workers: 2, planks: 4, stone: 3
  };

  constructor() { }

  ngOnInit(): void {
  }

}
