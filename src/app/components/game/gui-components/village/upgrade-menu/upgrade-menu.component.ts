import { Component, OnInit } from '@angular/core';
import {BuildingModel} from '../../../../../models/BuildingModel';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {BuildingService} from '../../../../../services/building.service';
import {FieldModel} from '../../../../../models/FieldModel';

@Component({
  selector: 'app-upgrade-menu',
  templateUrl: './upgrade-menu.component.html',
  styleUrls: ['./upgrade-menu.component.css']
})
export class UpgradeMenuComponent implements OnInit {

  field: FieldModel;
  building: BuildingModel;

  constructor(private buildService: BuildingService, private fieldService: FieldServiceService) {}

  ngOnInit(): void {
    this.field = this.fieldService.selectField();
    this.findBuilding(this.field.map, this.field.fieldNumber);
  }

  upgradeBuilding(): void {
    this.field.buildingLevel++;
    this.fieldService.updateField(this.field).subscribe();
  }

  private findBuilding(map: string, fieldNumber: number): void {
    this.buildService.findBuildingByMapAndFieldNumber(map, fieldNumber).subscribe(value => {
      this.building = value;
    });
  }

}
