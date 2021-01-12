import { Component, OnInit } from '@angular/core';
import {FieldModel} from '../../../../../models/FieldModel';
import {FieldServiceService} from '../../../../../services/field-service.service';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.css']
})
export class GateComponent implements OnInit {

  fields: FieldModel[];

  constructor(private fieldService: FieldServiceService) { }

  ngOnInit(): void {
    this.fieldService.findFieldsByMap('gate').subscribe(value => this.fields = value);
  }

}
