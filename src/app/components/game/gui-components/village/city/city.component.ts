import { Component, OnInit } from '@angular/core';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {Tile} from '../../../../../models/Tile';



@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit {

  pathStart = 'assets/buildings/';
  pathEnd = '.bmp';

  tiles: Tile[];


  constructor(private fieldService: FieldServiceService) {
  }

  ngOnInit(): void {
    this.tiles = this.fieldService.selectTiles();
    console.log('cityInit!');
  }

  setField(tileNumber: number, map: string): void {
    const field = this.fieldService.findFieldByWhereAndMap(tileNumber, map);
    console.log('CityF: ' + field.buildingId);
    this.fieldService.saveField(field);
  }


}
