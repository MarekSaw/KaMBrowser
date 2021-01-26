import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {ResourcesService} from '../../services/resources.service';
import {ResourcesModel} from '../../models/ResourcesModel';
import {ObservableService} from '../../services/observable.service';
import {ActivatedRoute} from '@angular/router';

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


  constructor(private breakpointObserver: BreakpointObserver,
              private resourcesService: ResourcesService,
              private observableService: ObservableService,
              private router: ActivatedRoute) {
    observableService.resourcesObservable.subscribe(value => this.resourcesModel = value);
  }

  ngOnInit(): void {
    this.resourcesModel = this.router.snapshot.data.resources;
    this.resourcesService.cacheResources(this.resourcesModel);

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.resourcesModel = this.resourcesService.getResources();
  }


}
