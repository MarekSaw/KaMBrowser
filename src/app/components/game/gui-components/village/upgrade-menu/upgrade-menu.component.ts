import { Component, OnInit } from '@angular/core';
import {BuildingModel} from '../../../../../models/BuildingModel';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {BuildingService} from '../../../../../services/building.service';
import {FieldModel} from '../../../../../models/FieldModel';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ResourcesModel} from '../../../../../models/ResourcesModel';
import {ResourcesService} from '../../../../../services/resources.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upgrade-menu',
  templateUrl: './upgrade-menu.component.html',
  styleUrls: ['./upgrade-menu.component.css'],
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

export class UpgradeMenuComponent implements OnInit {

  field: FieldModel;
  building: BuildingModel;
  resources: ResourcesModel;
  upgradeError: boolean;
  isDataAvailable: boolean;

  duration: number;

  constructor(private buildService: BuildingService,
              private fieldService: FieldServiceService,
              private resourcesService: ResourcesService,
              private router: Router) {}

  ngOnInit(): void {
    this.field = JSON.parse(localStorage.getItem('field'));
    this.buildService.findBuildingByMapAndFieldNumber(this.field.map, this.field.fieldNumber).subscribe(value => {
      this.building = value;
      this.findResources();
      this.upgradeError = false;
      this.isDataAvailable = true;
      this.fieldService.getTimeSecondToEndUpgrade(new Date(this.field.endOfBuildingTime).valueOf())
        .subscribe(value1 => this.duration = value1);
    });

  }

  upgradeBuilding(): void {
    if (this.areResourcesAvailable()) {
      this.upgrade();
      this.resourcesService.updateResources(this.resources).subscribe();
      this.fieldService.updateField(this.field).subscribe();
      this.redirect();
    } else {
      this.upgradeError = true;
    }
  }


  private findResources(): void {
    this.resourcesService.findResources().subscribe(value => {
      this.resources = value;
    });
  }
  private areResourcesAvailable(): boolean {
    return (this.resources.worker - this.building.workersNeed) >= 0 &&
      (this.resources.plank - this.building.planksNeed) >= 0 &&
      (this.resources.stone - this.building.stoneNeed) >= 0;
  }

  private upgrade(): void {
    this.field.buildingLevel++;
    this.resources.worker -= this.building.workersNeed;
    this.resources.plank -= this.building.planksNeed;
    this.resources.stone -= this.building.stoneNeed;
  }

  private redirect(): void {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/game/village/upgrade-menu']);
    });
  }

}
