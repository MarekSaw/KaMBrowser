import { Component, OnInit } from '@angular/core';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {FieldModel} from '../../../../../models/FieldModel';
import {Router} from '@angular/router';
import {FieldResourcesInformationService} from '../../../../../services/field-resources-information.service';
import {CountdownEvent} from 'ngx-countdown';



@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit {



  fields: FieldModel[];
  field: FieldModel;
  duration: number[] = Array<number>(8);

  constructor(private fieldService: FieldServiceService,
              private fieldResourcesInformationService: FieldResourcesInformationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.fieldService.findFieldsByMap('city').subscribe(value => {
      this.fields = value;
      this.fields.forEach((oneField, index) =>
        this.fieldResourcesInformationService.getTimeSecondToEndUpgrade(oneField.map, oneField.fieldNumber)
          .subscribe(value1 => this.duration[index] = value1));
    });
  }

  setField(map: string, fileNumber: number): void {
    this.fieldService.findFieldByMapAndFieldNumber(map, fileNumber).subscribe(value => {
      this.field = value;
      localStorage.setItem('field', JSON.stringify(this.field));
      this.goToSelectedField(this.field.buildingId, this.field.className);
    });
  }

  goToSelectedField(buildingId: number, className: string): void {
    if (buildingId === 1 || buildingId === 2 || buildingId === 3) {
      this.router.navigate([`/game/village/city/${className.includes('build-') ? className.substr(6) : className}-menu`]);
    } else {
      this.router.navigate(['/game/village/upgrade-menu']);
    }
  }

  handleEvent($event: CountdownEvent): void {
    const leftSecondsToEndUpgrade = $event.left;

    if (leftSecondsToEndUpgrade === 0){
      this.fields.forEach((oneField, index) =>
        this.fieldResourcesInformationService.getTimeSecondToEndUpgrade(oneField.map, oneField.fieldNumber)
          .subscribe(value1 => {
            this.duration[index] = value1;
          }));
    }
  }
}
