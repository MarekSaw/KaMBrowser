import {Component, OnInit} from '@angular/core';
import {ResourcesModel} from '../../../../models/ResourcesModel';
import {AddResourcesService} from '../../../../services/add-resources.service';

@Component({
  selector: 'app-dialog-adding-resources',
  templateUrl: './dialog-adding-resources.component.html',
  styleUrls: ['./dialog-adding-resources.component.css']
})
export class DialogAddingResourcesComponent implements OnInit{

  resourcesToAdd: ResourcesModel;
  isDataAvailable: boolean;

  constructor(private addResourcesService: AddResourcesService) {
  }

  ngOnInit(): void {
    this.resourcesToAdd = this.addResourcesService.getResources();
    this.isDataAvailable = true;
  }
}
