import { Component, OnInit } from '@angular/core';
import {FieldServiceService} from '../../../../../../../services/field-service.service';
import {Router} from '@angular/router';

export interface Building {
  buildingId: number;
  imgSource: string;
  imgAlt: string;
  resourceInfo: string;
}

@Component({
  selector: 'app-fisherman',
  templateUrl: './fisherman.component.html',
  styleUrls: ['./fisherman.component.css']
})
export class FishermanComponent implements OnInit {
  buildings: Building[] = [
    {
      buildingId: 26,
      imgSource: 'assets/buildings/26.bmp',
      imgAlt: 'Fisherman',
      resourceInfo: 'Planks: 6 Stone: 10  Time: 30 seconds'
    }
  ];

  constructor(private fieldService: FieldServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }


  setBuildingId(): void {
    const selectField = this.fieldService.selectField();
    selectField.className = 'build-fisherman';
    selectField.buildingLevel = 1;
    this.fieldService.updateField(selectField).subscribe(value => this.goToFarms());

  }

  goToFarms(): void{
    this.router.navigate(['game/farms']);
  }
}
