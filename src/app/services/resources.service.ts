import { Injectable } from '@angular/core';
import {ResourcesModel} from '../models/ResourcesModel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  public resources: ResourcesModel;

  private userId = 1;
  private resourcesUrl: string;

  constructor(private http: HttpClient) {
    this.resourcesUrl = 'http://localhost:8080/kam-api/resources/';
  }

  public cacheResources(resources: ResourcesModel): void {
    this.resources = resources;
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
}
