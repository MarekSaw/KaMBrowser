import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {ResourcesModel} from '../models/ResourcesModel';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  resourcesObservable = new Subject<ResourcesModel>();

  constructor() { }

  public emitResources(resources: ResourcesModel): void {
    this.resourcesObservable.next(resources);
  }

}
