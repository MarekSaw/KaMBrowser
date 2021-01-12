import {Component, OnInit} from '@angular/core';
import {FieldServiceService} from '../../../../../../../services/field-service.service';
import {Router} from '@angular/router';

export interface Building {
  buildingId: number;
  imgSource: string;
  imgAlt: string;
  resourceInfo: string;
}

@Component({
  selector: 'app-building-menu',
  templateUrl: './building-menu.component.html',
  styleUrls: ['./building-menu.component.css']
})
export class BuildingMenuComponent implements OnInit {

  buildings: Building[] = [
    {
      buildingId: 8,
      imgSource: 'assets/buildings/8.bmp',
      imgAlt: 'Stable',
      resourceInfo: 'Planks: 6 Stone: 10  Time: 30 seconds'
    },
    {
      buildingId: 9,
      imgSource: 'assets/buildings/9.bmp',
      imgAlt: 'Mill',
      resourceInfo: 'Planks: 3 Stone: 2  Time: 30 seconds'
    },
    {
      buildingId: 19,
      imgSource: 'assets/buildings/19.bmp',
      imgAlt: 'Bakery',
      resourceInfo: 'Planks: 4 Stone: 6  Time: 30 seconds'
    },
    {
      buildingId: 7,
      imgSource: 'assets/buildings/7.bmp',
      imgAlt: 'Farm',
      resourceInfo: 'Planks: 4 Stone: 4  Time: 30 seconds'
    },
    {
      buildingId: 10,
      imgSource: 'assets/buildings/10.bmp',
      imgAlt: 'Swine farm',
      resourceInfo: 'Planks: 6 Stone: 2  Time: 30 seconds'
    }
  ];

  constructor(private fieldService: FieldServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }


  setBuildingId(buildingId: number): void {
    const selectField = this.fieldService.selectField();
    console.log('fieldBU:' + selectField.buildingId);
    console.log('fieldBUwhere:' + selectField.fieldNumber);
    selectField.buildingId = buildingId;
    this.fieldService.updateField(selectField);
    console.log('fieldU:' + selectField.buildingId);
    this.router.navigate(['game/city']);
  }
}
