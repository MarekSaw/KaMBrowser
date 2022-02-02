import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import { SLIDE_IN_ANIMATION } from './animations/routing.animation';
import { RouterOutlet } from '@angular/router';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';
import {ObservableService} from './services/observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    SLIDE_IN_ANIMATION
  ]
})
export class AppComponent {
  title = 'KaM';
  public loadingBarEnabled = true;
  public zIndexValue: number;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private observer: ObservableService,
              private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationEvents(event);
    });
  }

  private navigationEvents(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.zIndexValue = 10;
      this.loadingBarEnabled = true;
    }
    if (event instanceof NavigationEnd) {
      this.zIndexValue = -10;
      this.loadingBarEnabled = false;
    }
    if (event instanceof NavigationCancel) {
      this.zIndexValue = -10;
      this.loadingBarEnabled = false;
    }
    if (event instanceof NavigationError) {
      this.zIndexValue = -10;
      this.loadingBarEnabled = false;
    }
  }

  prepareRoute(outlet: RouterOutlet): string {
    // console.log(outlet.activatedRouteData.animation);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}

