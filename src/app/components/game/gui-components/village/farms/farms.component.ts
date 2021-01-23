import { Component, OnInit } from '@angular/core';
import {FieldServiceService} from '../../../../../services/field-service.service';
import {FieldModel} from '../../../../../models/FieldModel';
import {Router} from '@angular/router';
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {

  fields: FieldModel[];
  field: FieldModel;

  duration: number[] = newArray<number>(3);

  constructor(private fieldService: FieldServiceService, private router: Router) { }

  ngOnInit(): void {
    this.fieldService.findFieldsByMap('farms').subscribe(value => {
      this.fields = value;
      this.fields.forEach((oneField, index) => this.fieldService.getTimeSecondToEndUpgrade(oneField.map, oneField.fieldNumber)
        .subscribe(value1 => {this.duration[index] = value1; console.log('index time:' + index); console.log('value1 time:' + value1);}));
    });
  }
  // this.duration[index] = value1
  setField(map: string, fieldNumber: number): void {
    this.fieldService.findFieldByMapAndFieldNumber(map, fieldNumber).subscribe(value => {
      this.field = value;
      localStorage.setItem('field', JSON.stringify(this.field));
      this.goToUpgradeMenu();
    });
  }

  goToUpgradeMenu(): void{
    this.router.navigate(['/game/village/upgrade-menu']);
  }
}
