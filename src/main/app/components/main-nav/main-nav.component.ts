import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  animations: [
    trigger('showAfterRoutingAnimation', [
      transition('* => main', [
        style({
          display: 'none'
        }),
        animate('1000ms', style({
          display: 'block'
        }))
      ])
    ])
  ]
})
export class MainNavComponent {
  scrollTopBtnState = 'main';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router) {}

  public scrollTopOfWindowScreen(): void {
    // console.log(this.router.url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public isMainSite(): boolean {
    this.scrollTopBtnState = this.router.url === '/' ? 'main' : this.router.url;
    return this.router.url === '/';
  }
}
