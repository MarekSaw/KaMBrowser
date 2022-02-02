import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const SLIDE_IN_ANIMATION = trigger('routeAnimation', [
  transition('MainSitePage => *', [
    style({
      position: 'relative',
      zIndex: -1
    }),
    query(':enter', [
      style({
        position: 'absolute',
        top: '-100%'
      }),
      animate('300ms ease-out', style({
        top: '20%'
      }))
    ], { optional: true })
  ]),
  transition('LoginPage => MainSitePage, ContactPage => MainSitePage, RegisterPage => MainSitePage', [
    style({
      position: 'relative',
      zIndex: -1
    }),
    query(':leave', [
      style({
        position: 'absolute',
        top: '20%'
      }),
      animate('300ms ease-out', style({
        top: '-100%'
      }))
    ], { optional: true }),
    query(':enter', [
      style({
        display: 'none'
      }),
      animate('300ms ease-out', style({
        display: 'block'
      }))
    ], { optional: true })
  ]),
  transition('* => LoginPage, ContactPage => RegisterPage', [
    style({
      position: 'relative',
      width: '100vw',
      overflow: 'hidden'
    }),
    group([
      query(':enter', [
        style({
          position: 'absolute',
          left: '-100%'
        }),
        animate('500ms linear', style({
          left: '30%'
        }))
      ], { optional: true }),
      query(':leave', [
        style({
          position: 'absolute',
          right: '30%'
        }),
        animate('500ms linear', style({
          right: '-100%'
        }))
      ], { optional: true })
    ])
  ]),
  transition('* => ContactPage, LoginPage => RegisterPage', [
    style({
      position: 'relative',
      width: '100vw',
      overflow: 'hidden'
    }),
    group([
      query(':enter', [
        style({
          position: 'absolute',
          right: '-100%'
        }),
        animate('500ms linear', style({
          right: '30%'
        }))
      ], { optional: true }),
      query(':leave', [
        style({
          position: 'absolute',
          left: '30%'
        }),
        animate('500ms linear', style({
          left: '-100%'
        }))
      ], { optional: true })
    ])
  ])
]);
