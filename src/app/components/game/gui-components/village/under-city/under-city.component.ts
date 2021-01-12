import { Component, OnInit } from '@angular/core';
import {FieldModel} from '../../../../../models/FieldModel';
import {FieldServiceService} from '../../../../../services/field-service.service';

@Component({
  selector: 'app-under-city',
  templateUrl: './under-city.component.html',
  styleUrls: ['./under-city.component.css']
})
export class UnderCityComponent implements OnInit {

  fields: FieldModel[];

  constructor(private fieldService: FieldServiceService) { }

  ngOnInit(): void {
    this.fieldService.findFieldsByMap('underCity').subscribe(value => this.fields = value);
  }

}
