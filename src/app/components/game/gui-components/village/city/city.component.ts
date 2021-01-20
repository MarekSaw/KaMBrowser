import { Component, OnInit } from '@angular/core';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {FieldModel} from '../../../../../models/FieldModel';
import {Router} from '@angular/router';



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

  constructor(private fieldService: FieldServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.fieldService.findFieldsByMap('city').subscribe(value => this.fields = value);
  }

  setField(map: string, fileNumber: number): void {
    this.fieldService.findFieldByMapAndFieldNumber(map, fileNumber).subscribe(value => {
      this.field = value;
      localStorage.setItem('field', JSON.stringify(this.field));
      this.goToSelectedField(this.field.buildingLevel, this.field.buildingId, this.field.className);
    });
  }

  goToSelectedField(buildingLevel: number, buildingId: number, className: string): void {
    if (buildingId === 1 || buildingId === 2 || buildingId === 3) {
      this.router.navigate([`/game/village/city/${className.includes('build-') ? className.substr(6) : className}-menu`]);
    } else {
      if (buildingLevel === 0) {
        this.router.navigate(['/game/village/building-menu']);
      } else {
        this.router.navigate(['/game/village/upgrade-menu']);
      }
    }
  }

}
