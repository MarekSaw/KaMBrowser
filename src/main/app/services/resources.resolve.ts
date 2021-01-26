import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {ResourcesModel} from '../models/ResourcesModel';
import {ResourcesService} from './resources.service';


@Injectable()
export class ResourcesResolve implements Resolve<ResourcesModel> {
  constructor(private resourcesService: ResourcesService) {}


  resolve(route: ActivatedRouteSnapshot): Observable<ResourcesModel> {
    return this.resourcesService.findResources();
  }
}
