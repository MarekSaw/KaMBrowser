import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FieldResourcesInformationModel} from '../models/FieldResourcesInformationModel';

@Injectable({
  providedIn: 'root'
})
export class FieldResourcesInformationService {

  private fieldResourcesInformationURL: string;

  constructor(private http: HttpClient) {
    this.fieldResourcesInformationURL = 'http://localhost:8080/kam-api/fieldResourcesInformation';
  }

  public getFieldResourcesInformation(map: string, fieldNumber: number): Observable<FieldResourcesInformationModel>{
    return this.http.get<FieldResourcesInformationModel>(`${this.fieldResourcesInformationURL}?map=${map}&fieldNumber=${fieldNumber}`);
  }
}
