import { trigger, state, animate, style, transition } from '@angular/animations';
// FOR AUTHENTICATION
export function moveIn() {
  return trigger('moveIn', [
    state('void', style({ position: 'fixed', width: '100%' })),
    // state('*', style({ position: 'fixed', width: '100%' })),
    transition(':enter', [
      style({ opacity: '0', transform: 'translateX(50%)' }),
      animate('1s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
      style({ opacity: '1', transform: 'translateX(0)' }),
      animate('0.5s ease-in-out', style({ opacity: '0.5', transform: 'translateX(-100%)' }))
    ])
  ]);
}

export function fallIn() {
  return trigger('fallIn', [
    transition(':enter', [
      style({ opacity: '0', transform: 'translateY(40px)' }),
      animate('.4s .2s ease-in-out', style({ opacity: '1', transform: 'translateY(0)' }))
    ]),
    transition(':leave', [
      style({ opacity: '1', transform: 'translateX(0)' }),
      animate('.3s ease-in-out', style({ opacity: '0', transform: 'translateX(-200px)' }))
    ])
  ]);
}

export function moveInLeft() {
  return trigger('moveInLeft', [
    transition(':enter', [
      style({ opacity: '0', transform: 'translateX(-100px)' }),
      animate('.6s .2s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
    ])
  ]);
}
// FOR CONSUMER
export function consumerMoveIn() {
  return trigger('consumerMoveIn', [
    state('void', style({ position: 'fixed', width: '100%' })),
    transition(':enter', [
      style({ opacity: '0', transform: 'translateX(50%)' }),
      animate('1s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
      style({ opacity: '0.5', transform: 'translateX(0)' }),
      animate('1s ease-in-out', style({ opacity: '0.4', transform: 'translateX(-100%)' }))
    ])]);
}

// FOR VIEW CANDIDATES
export function viewCandidatesMoveIn() {
  return trigger('viewCandidatesMoveIn', [
    state('void', style({ position: 'fixed', width: '100%' })),
    transition(':enter', [
      style({ opacity: '0', transform: 'translateY(100%)' }), // from 100% Y,
      animate('1s ease-in-out', style({ opacity: '1', transform: 'translateY(0%)' })) // last position 0 Y
    ]),
    transition(':leave', [
      style({ opacity: '1', transform: 'translateY(0%)' }), // from where
      animate('1s ease-in-out', style({ opacity: '0.7', transform: 'translateY(100%)' }))
    ])]);
}
