import { Component, OnInit } from '@angular/core';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {FieldModel} from '../../../../../models/FieldModel';



@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit {

  pathStart = 'assets/buildings/';
  pathEnd = '.bmp';

  fields: FieldModel[];
  field: FieldModel;

  constructor(private fieldService: FieldServiceService) { }

  ngOnInit(): void {
    this.fieldService.findFieldsByMap('farms').subscribe(value => this.fields = value);
  }

  setField(map: string, fileNumber: number): void {
    this.fieldService.findFieldByMapAndFieldNumber(map, fileNumber).subscribe(value => this.field = value);
    console.log('CityF: ' + this.field.buildingId);
    this.fieldService.saveField(this.field);
  }


}
