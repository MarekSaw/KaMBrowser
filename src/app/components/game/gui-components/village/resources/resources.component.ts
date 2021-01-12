import { Component, OnInit } from '@angular/core';
import {FieldModel} from '../../../../../models/FieldModel';
import {FieldServiceService} from '../../../../../services/field-service.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  fields: FieldModel[];

  constructor(private fieldService: FieldServiceService) { }

  ngOnInit(): void {
    this.fieldService.findFieldsByMap('resources').subscribe(value => this.fields = value);
  }

}
