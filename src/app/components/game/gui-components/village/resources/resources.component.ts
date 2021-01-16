import { Component, OnInit } from '@angular/core';
import {FieldModel} from '../../../../../models/FieldModel';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  fields: FieldModel[];
  field: FieldModel;

  constructor(private fieldService: FieldServiceService, private router: Router) { }

  ngOnInit(): void {
    this.fieldService.findFieldsByMap('resources').subscribe(value => this.fields = value);
  }

  setField(map: string, fileNumber: number): void {
    this.fieldService.findFieldByMapAndFieldNumber(map, fileNumber).subscribe(value => {
      this.field = value;
      localStorage.setItem('field', JSON.stringify(this.field));
      this.goToSelectedField(this.field.buildingLevel, this.field.className);
    });
  }

  goToSelectedField(buildingLevel: number, className: string): void {
    if (buildingLevel === 0) {
      this.router.navigate(['/game/village/building-menu']);
    } else {
      this.router.navigate(['/game/village/upgrade-menu']);
    }
  }
}
