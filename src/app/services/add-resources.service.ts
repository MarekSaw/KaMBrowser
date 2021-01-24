import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResourcesModel} from '../models/ResourcesModel';
import {AddResourcesModel} from '../models/AddResourcesModel';

@Injectable({
  providedIn: 'root'
})

export class AddResourcesService {

  resources: ResourcesModel;
  addResourcesUrl: string;
  userId = 1;

  constructor(private http: HttpClient) {
    this.addResourcesUrl = '/kam-api/add-resources/';
  }

  public cacheResources(resources: ResourcesModel): void {
    this.resources = resources;
  }

  public getResources(): ResourcesModel {
    return this.resources;
  }

  public getResourcesAdd(): Observable<AddResourcesModel> {
    return this.http.get<AddResourcesModel>(`${this.addResourcesUrl}${this.userId}`);
  }

  public getResourcesMultiplier(): Observable<number> {
    return this.http.get<number>(`${this.addResourcesUrl}check/${this.userId}`);
  }

  public updateResourcesAddingDate(): void {
    this.http.put(`${this.addResourcesUrl}check/${this.userId}`, null).subscribe();
  }


}
