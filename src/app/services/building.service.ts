import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BuildingModel} from '../models/BuildingModel';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private buildingsUrl: string;

  constructor(private http: HttpClient) {
    this.buildingsUrl = 'http://localhost:8080/kam-api/buildings';
  }

  public findBuildingByMapAndFieldNumber(map: string, fieldNumber: number): Observable<BuildingModel> {
    return this.http.get<BuildingModel>(`${this.buildingsUrl}?map=${map}&fieldNumber=${fieldNumber}`);
  }
}
