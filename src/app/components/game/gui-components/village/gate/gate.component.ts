import { Component, OnInit } from '@angular/core';
import {FieldModel} from '../../../../../models/FieldModel';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {Router} from '@angular/router';
import {CountdownEvent} from 'ngx-countdown';
import {FieldResourcesInformationService} from '../../../../../services/field-resources-information.service';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.css']
})
export class GateComponent implements OnInit {

  fields: FieldModel[];
  field: FieldModel;

  duration: number[] = Array<number>(3);

  constructor(private fieldService: FieldServiceService,
              private fieldResourcesInformationService: FieldResourcesInformationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.fieldService.findFieldsByMap('gate').subscribe(value => {
      this.fields = value;
      this.fields.forEach((oneField, index) =>
        this.fieldResourcesInformationService.getTimeSecondToEndUpgrade(oneField.map, oneField.fieldNumber)
          .subscribe(value1 => this.duration[index] = value1));
    });
  }


  setField(map: string, fieldNumber: number): void {
    this.fieldService.findFieldByMapAndFieldNumber(map, fieldNumber).subscribe(value => {
      this.field = value;
      localStorage.setItem('field', JSON.stringify(this.field));
      this.goToUpgradeMenu();
    });
  }

  goToUpgradeMenu(): void {
    this.router.navigate(['/game/village/upgrade-menu']);
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
