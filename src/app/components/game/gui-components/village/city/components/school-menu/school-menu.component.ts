import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FieldModel} from '../../../../../../../models/FieldModel';
import {BuildingModel} from '../../../../../../../models/BuildingModel';
import {ResourcesModel} from '../../../../../../../models/ResourcesModel';
import {BuildingService} from '../../../../../../../services/building.service';
import {FieldServiceService} from '../../../../../../../services/field-service.service';
import {ResourcesService} from '../../../../../../../services/resources.service';
import {Router} from '@angular/router';
import {UnitList} from '../../../../../../../models/UnitList';

@Component({
  selector: 'app-school-menu',
  templateUrl: './school-menu.component.html',
  styleUrls: ['./school-menu.component.css'],
  animations: [
    trigger('showHide', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', [
        animate('1s')
      ]),
      transition('hide => show', [
        animate('1s')
      ]),
    ])
  ]
})
// export class SchoolMenuComponent implements OnInit {
export class SchoolMenuComponent {

  field: FieldModel;
  building: BuildingModel;
  resources: ResourcesModel;
  upgradeError: boolean;
  isDataAvailable: boolean;

  unit: UnitList = {name: 'Worker', goldCost: 1, timeNeeded: 5};
  units: UnitList[] = [
    {name: 'Worker', goldCost: 1, timeNeeded: 5},
    {name: 'Builder', goldCost: 5, timeNeeded: 25},
    {name: 'Recruit', goldCost: 2, timeNeeded: 15}
  ];
  unitIterator = 0;
  goldRequired: number;
  timeRequired: number;


  constructor(private buildService: BuildingService,
              private fieldService: FieldServiceService,
              private resourcesService: ResourcesService,
              private router: Router) {
  }

  // ngOnInit(): void {
  //   this.field = JSON.parse(localStorage.getItem('field'));
  //   this.buildService.findBuildingByMapAndFieldNumber(this.field.map, this.field.fieldNumber).subscribe(value => {
  //     this.building = value;
  //     this.findResources();
  //     this.upgradeError = false;
  //
  //   });
  // }
  //
  // upgradeBuilding(): void {
  //   if (this.areResourcesAvailable()) {
  //     this.upgrade();
  //     this.resourcesService.updateResources(this.resources).subscribe();
  //     this.fieldService.updateField(this.field).subscribe();
  //     this.redirect();
  //   } else {
  //     this.upgradeError = true;
  //   }
  // }
  //
  // nextUnit(direction: number): void {
  //   if (direction === 1){
  //     if (this.unitIterator === this.units.length - 1) {
  //       this.unitIterator = 0;
  //       this.unit = this.units[this.unitIterator];
  //     } else {
  //       this.unit = this.units[++this.unitIterator];
  //     }
  //   } else {
  //     if (this.unitIterator === 0) {
  //       this.unitIterator = this.units.length - 1;
  //       this.unit = this.units[this.unitIterator];
  //     } else {
  //       this.unit = this.units[--this.unitIterator];
  //     }
  //   }
  //   this.updateRequiredValuesOnNextUnit();
  // }
  //
  // updateRequiredValues(): void {
  //   const multiplier = (document.getElementById('unit-slider') as HTMLInputElement).value;
  //   this.goldRequired = this.unit.goldCost * Number.parseInt(multiplier);
  //   this.timeRequired = this.unit.timeNeeded * Number.parseInt(multiplier);
  // }
  //
  // updateRequiredValuesOnNextUnit(): void {
  //   this.goldRequired = this.unit.goldCost * this.getMaxUnitsToRecruit();
  //   this.timeRequired = this.unit.timeNeeded * this.getMaxUnitsToRecruit();
  // }
  //
  // getMaxUnitsToRecruit(): number {
  //   return this.resources.gold / this.unit.goldCost;
  // }
  //
  //
  // private findResources(): void {
  //   this.resourcesService.findResources().subscribe(value => {
  //     this.resources = value;
  //     this.isDataAvailable = true;
  //     this.updateRequiredValuesOnNextUnit();
  //   });
  // }
  // private areResourcesAvailable(): boolean {
  //   return (this.resources.worker - this.building.workersNeed) > 0 &&
  //     (this.resources.plank - this.building.planksNeed) > 0 &&
  //     (this.resources.stone - this.building.stoneNeed) > 0;
  // }
  //
  // private upgrade(): void {
  //   if (this.field.buildingLevel === 0) {
  //     this.field.className = `build-${this.field.className}`;
  //   }
  //   this.field.buildingLevel++;
  //   this.resources.worker -= this.building.workersNeed;
  //   this.resources.plank -= this.building.planksNeed;
  //   this.resources.stone -= this.building.stoneNeed;
  // }

  // private redirect(): void {
  //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
  //     this.router.navigate(['/game/village/city']);
  //   });
  // }
}
