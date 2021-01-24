import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BuildingModel} from '../models/BuildingModel';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private buildingsUrl: string;
  private building: BuildingModel;

  constructor(private http: HttpClient) {
    this.buildingsUrl = 'http://localhost:8080/kam-api/buildings';
  }

  public cacheBuilding(building: BuildingModel): void {
    this.building = building;
  }

  public getBuilding(): BuildingModel {
    return this.building;
  }

  public findBuildingByMapAndFieldNumber(map: string, fieldNumber: number): Observable<BuildingModel> {
    return this.http.get<BuildingModel>(`${this.buildingsUrl}?map=${map}&fieldNumber=${fieldNumber}`);
  }
}
