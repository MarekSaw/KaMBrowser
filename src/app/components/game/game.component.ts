import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {ResourcesService} from '../../services/resources.service';
import {ResourcesModel} from '../../models/ResourcesModel';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 1260px)')
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public resourcesModel: ResourcesModel;

  constructor(private breakpointObserver: BreakpointObserver, private resourcesService: ResourcesService) {}

  ngOnInit(): void {
    console.log('game init!');
    this.resourcesService.findResources().subscribe(value => {
      this.resourcesModel = value;
      console.log('resources got!' + this.resourcesModel);
      this.resourcesService.cacheResources(this.resourcesModel);
      console.log('resources cached!');
    });
  }


}
