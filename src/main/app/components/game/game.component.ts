import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {ResourcesService} from '../../services/resources.service';
import {ResourcesModel} from '../../models/ResourcesModel';
import {ObservableService} from '../../services/observable.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnChanges {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 1260px)')
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  resourcesModel: ResourcesModel;
  isDataAvailable: boolean;

  constructor(private breakpointObserver: BreakpointObserver,
              private resourcesService: ResourcesService,
              private observableService: ObservableService) {
    observableService.configObservable.subscribe(value => this.resourcesModel = value);
  }

  ngOnInit(): void {
    this.resourcesService.findResources().subscribe(value => {
      this.resourcesModel = value;
      this.resourcesService.cacheResources(this.resourcesModel);
      this.isDataAvailable = true;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.resourcesModel = this.resourcesService.getResources();
  }


}
