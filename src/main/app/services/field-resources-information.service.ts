import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FieldResourcesInformationModel} from '../models/FieldResourcesInformationModel';

@Injectable({
  providedIn: 'root'
})
export class FieldResourcesInformationService {

  private fieldResourcesInformationURL: string;
  private fieldResourcesInformationTimeURL: string;

  constructor(private http: HttpClient) {
    this.fieldResourcesInformationURL = '/kam-api/fieldResourcesInformation';
    this.fieldResourcesInformationTimeURL = '/kam-api/fieldResourcesInformation/time';
  }

  public getFieldResourcesInformation(map: string, fieldNumber: number): Observable<FieldResourcesInformationModel>{
    return this.http.get<FieldResourcesInformationModel>(`${this.fieldResourcesInformationURL}?map=${map}&fieldNumber=${fieldNumber}`);
  }

  public getTimeSecondToEndUpgrade(map: string, fieldNumber: number): Observable<number>{
    return this.http.get<number>(`${this.fieldResourcesInformationTimeURL}/end?map=${map}&fieldNumber=${fieldNumber}`);
  }
}
