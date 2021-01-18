import { Injectable } from '@angular/core';
import {ResourcesModel} from '../models/ResourcesModel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ObservableService} from './observable.service';
import {hasOwnProperty} from 'tslint/lib/utils';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  public resources: ResourcesModel;


  private userId = 1;
  private resourcesUrl: string;

  constructor(private http: HttpClient, private observableService: ObservableService) {
    this.resourcesUrl = 'http://localhost:8080/kam-api/resources/';
    observableService.emitConfig(this.resources);
  }


  public cacheResources(resources: ResourcesModel): void {
    this.resources = resources;
  }
  public addToCachedResources(resources: ResourcesModel): void {
    for (const key in this.resources) {
      if (hasOwnProperty(resources, key)) {
        this.resources[key] += resources[key];
      }
    }
  }

  public getResources(): ResourcesModel {
    return this.resources;
  }

  public initializeResources(): void {
    this.http.post(`${this.resourcesUrl}${this.userId}`, null);
  }

  public findResources(): Observable<ResourcesModel> {
    return this.http.get<ResourcesModel>(`${this.resourcesUrl}${this.userId}`);
  }

  public updateResources(resourceModel: ResourcesModel): Observable<ResourcesModel> {
    return this.http.put<ResourcesModel>(`${this.resourcesUrl}${this.userId}`, resourceModel);
  }

  public addAndUpdateResources(resourceModel: ResourcesModel): Observable<ResourcesModel> {
    return this.http.put<ResourcesModel>(`${this.resourcesUrl}add/${this.userId}`, resourceModel);
  }
}
