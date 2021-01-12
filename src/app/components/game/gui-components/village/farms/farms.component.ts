import { Component, OnInit } from '@angular/core';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {FieldModel} from '../../../../../models/FieldModel';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {

  fields: FieldModel[];
  field: FieldModel;

  constructor(private fieldService: FieldServiceService) { }

  ngOnInit(): void {
    this.fieldService.findFieldsByMap('farms').subscribe(value => this.fields = value);
  }

  setField(map: string, fieldNumber: number): void {
    this.fieldService.findFieldByMapAndFieldNumber(map, fieldNumber).subscribe(value => {
      console.log(value);
      this.field = value;
      this.fieldService.saveField(this.field);
      console.log('setField: ' + this.field.className); });
  }
}
