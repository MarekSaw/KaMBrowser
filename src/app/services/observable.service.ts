import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {ResourcesModel} from '../models/ResourcesModel';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  configObservable = new Subject<ResourcesModel>();

  constructor() { }

  public emitConfig(resources: ResourcesModel): void {
    this.configObservable.next(resources);
  }

}
