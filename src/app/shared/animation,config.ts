import {animate, style, transition} from '@angular/animations';

export const inOutAnimation = {
  name: 'inOutAnimation',
  definitions: [
  transition(':enter', [
    style({opacity: 0}),
    animate('0.3s ease-out', style({opacity: 1}))
  ]),
  transition(':leave', [
    style({opacity: 1}),
    animate('0.3s ease-in', style({opacity: 0}))
  ])
]};
export const upDownAnimation = {
  name: 'upDownAnimation',
  definitions: [
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('0.3s ease-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.3s ease-in', style({transform: 'translateY(-100%)'}))
    ])
  ]};
export const expandCollapseAnimation = {
  name: 'expandCollapse',
  definitions: [
    transition(':enter', [
      style({height: '0'}),
      animate('1s ease-out', style({height: '*'}))
    ]),
    transition(':leave', [
      style({height: '*'}),
      animate('1s ease-in', style({height: '0'}))
    ])
  ]};
export const zoomInOutAnimation = {
  name: 'zoomInOutAnimation',
  definitions: [
    transition(':enter', [
      style({transform: 'scale(0)'}),
      animate('0.3s ease-out', style({transform: 'scale(1)'}))
    ]),
    transition(':leave', [
      style({transform: 'scale(1)'}),
      animate('0.3s ease-in', style({transform: 'scale(0)'}))
    ])
  ]};
