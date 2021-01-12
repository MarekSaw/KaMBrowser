import {Injectable} from '@angular/core';
import {FieldModel} from '../models/FieldModel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FieldServiceService {

  public field: FieldModel;
  public fields: FieldModel[];

  private fieldsUrl: string;
  private fieldsMapUrl: string;

  constructor(private http: HttpClient) {
    this.fieldsUrl = 'http://localhost:8080/kam-api/fields/';
    this.fieldsMapUrl = 'http://localhost:8080/kam-api/fields/map/';
  }

  public saveField(fieldToSave: FieldModel): void {
    this.field = fieldToSave;
  }

  public selectField(): FieldModel {
    return this.field;
  }

  public saveFields(fields: FieldModel[]): void {
    this.fields = fields;
    console.log('saveTiles: ' + fields);
    console.log('savedTiles: ' + this.fields);
  }

  public selectFields(): FieldModel[] {
    console.log('selectTiles: ' + this.fields);
    return this.fields;
  }

  public findFieldByMapAndFieldNumber(map: string, fieldNumber: number): Observable<FieldModel> {
    console.log('findFieldByWhereAndMap!');
    const userId = 1;
    return this.http.get<FieldModel>(`${this.fieldsUrl}${userId}?map=${map}&fieldNumber=${fieldNumber}`);
  }

  public findFieldsByMap(map: string): Observable<FieldModel[]> {
    console.log('findFieldMap!');
    const userId = 1;
    return this.http.get<FieldModel[]>(`${this.fieldsMapUrl}${userId}?map=${map}`);
  }

  public updateField(fieldUpdate: FieldModel): Observable<FieldModel> {
    console.log('updateField!');
    const userId = 1;
    return this.http.put<FieldModel>(`${this.fieldsUrl}${userId}`, fieldUpdate);
  }
}
