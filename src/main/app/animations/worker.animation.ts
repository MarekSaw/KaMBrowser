import {
  animate,
  animation,
  AnimationTriggerMetadata,
  keyframes,
  style,
  transition,
  trigger, useAnimation
} from '@angular/animations';

export const WALKING_ANIMATION = animation([
  animate('800ms', keyframes([
    style({backgroundImage: 'url("assets/animations/worker/worker_{{ direction }}/1_{{ resource }}.png")'}),
    style({backgroundImage: 'url("assets/animations/worker/worker_{{ direction }}/2_{{ resource }}.png")'}),
    style({backgroundImage: 'url("assets/animations/worker/worker_{{ direction }}/3_{{ resource }}.png")'}),
    style({backgroundImage: 'url("assets/animations/worker/worker_{{ direction }}/4_{{ resource }}.png")'}),
    style({backgroundImage: 'url("assets/animations/worker/worker_{{ direction }}/5_{{ resource }}.png")'}),
    style({backgroundImage: 'url("assets/animations/worker/worker_{{ direction }}/6_{{ resource }}.png")'}),
    style({backgroundImage: 'url("assets/animations/worker/worker_{{ direction }}/7_{{ resource }}.png")'}),
    style({backgroundImage: 'url("assets/animations/worker/worker_{{ direction }}/8_{{ resource }}.png")'})
  ]))
]);

export const TRAVEL_ANIMATION = animation([
  animate('{{ timing }} ease-in', keyframes([
    style({transform: 'translateX(0)'}),
    style({transform: 'translateX({{ length }})'})
  ]))
]);

export const WORKER = (
  triggerName: string,
  direction: string,
  resource: string,
): AnimationTriggerMetadata => {
  return trigger(triggerName, [
    transition('* => *', [
      style({
        width: '50px',
        height: '50px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }),
      useAnimation(WALKING_ANIMATION, {
        params: {
          direction,
          resource
        }
      })
    ])
  ]);
};

export const WALKING = (
  triggerName: string,
  length: string,
  timing: string): AnimationTriggerMetadata => {
  return trigger(triggerName, [
    transition('* => *', [
      style({
        width: '50px',
        height: '50px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }),
      useAnimation(TRAVEL_ANIMATION, {
        params: {
          length,
          timing
        }
      })
    ])
  ]);
};
