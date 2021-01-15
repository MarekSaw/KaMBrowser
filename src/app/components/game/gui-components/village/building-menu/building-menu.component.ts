import {Component, OnInit} from '@angular/core';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {BuildingService} from '../../../../../services/building.service';
import {FieldModel} from '../../../../../models/FieldModel';
import {BuildingModel} from '../../../../../models/BuildingModel';
import {Router} from '@angular/router';



@Component({
  selector: 'app-building-menu',
  templateUrl: './building-menu.component.html',
  styleUrls: ['./building-menu.component.css']
})
export class BuildingMenuComponent implements OnInit {

  field: FieldModel;
  building: BuildingModel;

  constructor(private buildService: BuildingService, private fieldService: FieldServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.field = this.fieldService.selectField();
    this.findBuilding(this.field.map, this.field.fieldNumber);
  }

  buildBuilding(): void {
    this.field.buildingLevel++;
    this.field.className = `build-${this.field.className}`;
    this.fieldService.updateField(this.field).subscribe();
    this.redirect();
  }

  private findBuilding(map: string, fieldNumber: number): void {
    this.buildService.findBuildingByMapAndFieldNumber(map, fieldNumber).subscribe(value => {
      this.building = value;
    });
  }

  private redirect(): void {
    this.router.navigate(['/game/village/upgrade-menu']);
  }
}
