import {Component, OnInit} from '@angular/core';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {BuildingService} from '../../../../../services/building.service';
import {FieldModel} from '../../../../../models/FieldModel';
import {BuildingModel} from '../../../../../models/BuildingModel';
import {Router} from '@angular/router';
import {ResourcesService} from '../../../../../services/resources.service';
import {ResourcesModel} from '../../../../../models/ResourcesModel';
import {animate, state, style, transition, trigger} from '@angular/animations';



@Component({
  selector: 'app-building-menu',
  templateUrl: './building-menu.component.html',
  styleUrls: ['./building-menu.component.css'],
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

export class BuildingMenuComponent {

  field: FieldModel;
  building: BuildingModel;
  resources: ResourcesModel;
  buildError: boolean;
  isDataAvailable: boolean;

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
  //     this.buildError = false;
  //     this.isDataAvailable = true;
  //   });
  // }
  //
  // buildBuilding(): void {
  //   if (this.areResourcesAvailable()) {
  //     this.build();
  //     this.resourcesService.updateResources(this.resources).subscribe();
  //     this.fieldService.updateField(this.field).subscribe();
  //     this.redirect();
  //   } else {
  //     this.buildError = true;
  //   }
  // }
  //
  //
  // private findResources(): void {
  //   this.resourcesService.findResources().subscribe(value => {
  //     this.resources = value;
  //   });
  // }
  // private areResourcesAvailable(): boolean {
  //   return (this.resources.worker - this.building.workersNeed) > 0 &&
  //     (this.resources.plank - this.building.planksNeed) > 0 &&
  //     (this.resources.stone - this.building.stoneNeed) > 0;
  // }
  //
  // private build(): void {
  //   this.field.buildingLevel++;
  //   this.field.className = `build-${this.field.className}`;
  //   this.resources.worker -= this.building.workersNeed;
  //   this.resources.plank -= this.building.planksNeed;
  //   this.resources.stone -= this.building.stoneNeed;
  // }
  //
  // private redirect(): void {
  //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
  //     this.router.navigate(['/game/village/upgrade-menu']);
  //   });
  // }
}
