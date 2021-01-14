import { Component, OnInit } from '@angular/core';
import {BuildingModel} from '../../../../../models/BuildingModel';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {BuildingService} from '../../../../../services/building.service';

@Component({
  selector: 'app-upgrade-menu',
  templateUrl: './upgrade-menu.component.html',
  styleUrls: ['./upgrade-menu.component.css']
})
export class UpgradeMenuComponent implements OnInit {

  building: BuildingModel;

  constructor(private buildService: BuildingService, private fieldService: FieldServiceService) {}

  ngOnInit(): void {
    const selectedField = this.fieldService.selectField();
    this.buildService.findBuildingByMapAndFieldNumber(selectedField.map, selectedField.fieldNumber).subscribe(value => {
      this.building = value;
    });
  }

}
