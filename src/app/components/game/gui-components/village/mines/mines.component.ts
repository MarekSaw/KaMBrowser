import { Component, OnInit } from '@angular/core';
import {FieldModel} from '../../../../../models/FieldModel';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {Router} from '@angular/router';
import {FieldResourcesInformationService} from '../../../../../services/field-resources-information.service';
import {CountdownEvent} from 'ngx-countdown';

@Component({
  selector: 'app-mines',
  templateUrl: './mines.component.html',
  styleUrls: ['./mines.component.css']
})
export class MinesComponent implements OnInit {

  fields: FieldModel[];
  field: FieldModel;

  duration: number[] = Array<number>(2);

  constructor(private fieldService: FieldServiceService,
              private fieldResourcesInformationService: FieldResourcesInformationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.fieldService.findFieldsByMap('mines').subscribe(value => {
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
