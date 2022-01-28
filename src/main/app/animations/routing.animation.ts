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
    ])
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
      ]),
      query(':leave', [
        style({
          position: 'absolute',
          right: '30%'
        }),
        animate('500ms linear', style({
          right: '-100%'
        }))
      ])
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
      ]),
      query(':leave', [
        style({
          position: 'absolute',
          left: '30%'
        }),
        animate('500ms linear', style({
          left: '-100%'
        }))
      ])
    ])
  ])
]);
