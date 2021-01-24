import {Injectable} from '@angular/core';
import {FieldModel} from '../models/FieldModel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FieldServiceService {

  private fieldsUrl: string;
  private fieldsMapUrl: string;

  constructor(private http: HttpClient) {
    this.fieldsUrl = '/kam-api/fields/';
    this.fieldsMapUrl = '/kam-api/fields/map/';
  }

  public findFieldByMapAndFieldNumber(map: string, fieldNumber: number): Observable<FieldModel> {
    const userId = 1;
    return this.http.get<FieldModel>(`${this.fieldsUrl}${userId}?map=${map}&fieldNumber=${fieldNumber}`);
  }

  public findFieldsByMap(map: string): Observable<FieldModel[]> {
    const userId = 1;
    return this.http.get<FieldModel[]>(`${this.fieldsMapUrl}${userId}?map=${map}`);
  }

  public updateField(fieldUpdate: FieldModel): Observable<FieldModel> {
    const userId = 1;
    return this.http.put<FieldModel>(`${this.fieldsUrl}${userId}`, fieldUpdate);
  }


}
