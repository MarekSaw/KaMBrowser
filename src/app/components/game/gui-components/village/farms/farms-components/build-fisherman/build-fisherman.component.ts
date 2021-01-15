import { Component, OnInit } from '@angular/core';
import {BuildingService} from '../../../../../../../services/building.service';
import {FieldServiceService} from '../../../../../../../services/field-service.service';
import {BuildingModel} from '../../../../../../../models/BuildingModel';


@Component({
  selector: 'app-build-fisherman',
  templateUrl: './build-fisherman.component.html',
  styleUrls: ['./build-fisherman.component.css']
})
export class BuildFishermanComponent implements OnInit {

  // buildingInfo: BuildingInfo = {
  //   image: 'assets/buildings/26.bmp',
  //   id: 26,
  //   workers: 2, planks: 4, stone: 3
  // };

  building: BuildingModel;

  constructor(private buildingService: BuildingService, private fieldService: FieldServiceService) { }

  ngOnInit(): void {
    const selectField = this.fieldService.selectField();
    console.log('selectedField ' + selectField);
    this.findBuilding(selectField.map, selectField.fieldNumber);
  }

  findBuilding(map: string, fieldNumber: number): void{
    this.buildingService.findBuildingByMapAndFieldNumber(map, fieldNumber)
      .subscribe(value => {
        this.building = value;
        console.log('value: ' + value);
      });
  }
}
