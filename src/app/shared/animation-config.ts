import {animate, style, transition, trigger, query} from '@angular/animations';
const optional = {optional: true};
export const inOutAnimation = trigger('inOutAnimation', [
  transition(':enter', [
    style({opacity: 0}),
    animate('0.3s ease-out', style({opacity: 1}))
  ]),
  transition(':leave', [
    style({opacity: 1}),
    animate('0.3s ease-in', style({opacity: 0}))
  ])
]);

export const upDownAnimation = trigger('upDownAnimation', [
  transition(':enter', [
    style({transform: 'translateY(-100%)'}),
    animate('0.3s ease-out', style({transform: 'translateY(0%)'}))
  ]),
  transition(':leave', [
    style({transform: 'translateY(0%)'}),
    animate('0.3s ease-in', style({transform: 'translateY(-100%)'}))
  ])
]);
export const expandCollapseAnimation = trigger('expandCollapse', [
  transition(':enter', [
    style({height: '0'}),
    animate('1s ease-out', style({height: '*'}))
  ]),
  transition(':leave', [
    style({height: '*'}),
    animate('1s ease-in', style({height: '0'}))
  ])
]);
export const zoomInOutAnimation = trigger('zoomInOutAnimation', [
  transition(':enter', [
    style({transform: 'scale(0)'}),
    animate('0.3s ease-out', style({transform: 'scale(1)'}))
  ]),
  transition(':leave', [
    style({transform: 'scale(1)'}),
    animate('0.3s ease-in', style({transform: 'scale(0)'}))
  ])
]);

// route animations: basic
export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)'
      })
    ], optional),
    query(':enter', [
      animate('300ms ease', style({
        opacity: 1,
        transform: 'scale(1) translateY(0)'
      }))
    ], optional),
    query(':leave', [
      animate('300ms ease', style({
        opacity: 1,
        transform: 'scale(0) translateY(100%)'
      }))
    ], optional)
  ])
]);
