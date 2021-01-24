import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddResourcesService} from '../../../../services/add-resources.service';
import {ResourcesService} from '../../../../services/resources.service';
import {ResourcesModel} from '../../../../models/ResourcesModel';
import {AddResourcesModel} from '../../../../models/AddResourcesModel';
import {DialogAddingResourcesComponent} from './dialog-adding-resources.component';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {

  addResources: AddResourcesModel;
  resourcesToAdd: ResourcesModel;

  constructor(public dialog: MatDialog, private addResourcesService: AddResourcesService, private resourcesService: ResourcesService) { }

  ngOnInit(): void {
    this.addResourcesService.getResourcesMultiplier().subscribe(multiplier => {
      if (multiplier > 0) {
        this.addResourcesService.getResourcesAdd().subscribe(value => {
          this.addResources = value;
          this.addResourcesService.updateResourcesAddingDate();
          this.resourcesToAdd = this.addResources;
          this.multiplyResources(multiplier);
          this.shareResourcesToAddBetweenComponentsAndUpdate();
          this.openDialog();
        });
      }
    });

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddingResourcesComponent);

    dialogRef.afterClosed().subscribe();
  }

  private multiplyResources(multiplier: number): void {
    for (const res in this.resourcesToAdd) {
      this.resourcesToAdd[res] *= multiplier;
    }
  }

  private shareResourcesToAddBetweenComponentsAndUpdate(): void {
    this.addResourcesService.cacheResources(this.resourcesToAdd);
    this.resourcesService.addToCachedResources(this.resourcesToAdd);
    this.resourcesService.addAndUpdateResources(this.resourcesToAdd).subscribe();
  }

}


