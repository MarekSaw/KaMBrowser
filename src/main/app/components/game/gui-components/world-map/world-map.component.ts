import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FieldServiceService} from '../../../../services/field-service.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {

  constructor(private fieldService: FieldServiceService) { }

  ngOnInit(): void {
  }
}
