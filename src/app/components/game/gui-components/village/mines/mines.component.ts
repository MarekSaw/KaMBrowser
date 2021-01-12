import { Component, OnInit } from '@angular/core';
import {FieldModel} from '../../../../../models/FieldModel';
import {FieldServiceService} from '../../../../../services/field-service.service';

@Component({
  selector: 'app-mines',
  templateUrl: './mines.component.html',
  styleUrls: ['./mines.component.css']
})
export class MinesComponent implements OnInit {

  fields: FieldModel[];

  constructor(private fieldService: FieldServiceService) { }

  ngOnInit(): void {
    this.fieldService.findFieldsByMap('mines').subscribe(value => this.fields = value);
  }

}
