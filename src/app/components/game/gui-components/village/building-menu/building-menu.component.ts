import {Component, OnInit} from '@angular/core';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {BuildingService} from '../../../../../services/building.service';
import {FieldModel} from '../../../../../models/FieldModel';
import {BuildingModel} from '../../../../../models/BuildingModel';



@Component({
  selector: 'app-building-menu',
  templateUrl: './building-menu.component.html',
  styleUrls: ['./building-menu.component.css']
})
export class BuildingMenuComponent implements OnInit {

  field: FieldModel;
  building: BuildingModel;

  constructor(private buildService: BuildingService, private fieldService: FieldServiceService) {
  }

  ngOnInit(): void {
    this.field = this.fieldService.selectField();
    this.findBuilding(this.field.map, this.field.fieldNumber);
  }

  buildBuilding(): void {
    this.field.buildingLevel++;
    this.fieldService.updateField(this.field).subscribe();
  }

  private findBuilding(map: string, fieldNumber: number): void {
    this.buildService.findBuildingByMapAndFieldNumber(map, fieldNumber).subscribe(value => {
      this.building = value;
    });
  }
}
