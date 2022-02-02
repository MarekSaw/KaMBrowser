import {
  animate,
  animation,
  AnimationTriggerMetadata,
  keyframes,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

/**
 * Animation changing background image with assets what makes feeling of moving unit
 *
 * @example
 * It can be used by
 *
 * useAnimation(animation, {
 *   params: {
 *     direction: 'up | right | down | left'
 *     easing: 'ease | ease-in | ease-out | ease-in-out | cubic-brazier()'
 *   }
 * })
 *
 * @return An object that contains the animation metadata.
 */
export const BUILDER_ANIMATION = animation([
  animate('800ms {{ easing }}', keyframes([
    style({backgroundImage: 'url("assets/animations/builder/builder_{{ direction }}/1.png")'}),
    style({backgroundImage: 'url("assets/animations/builder/builder_{{ direction }}/2.png")'}),
    style({backgroundImage: 'url("assets/animations/builder/builder_{{ direction }}/3.png")'}),
    style({backgroundImage: 'url("assets/animations/builder/builder_{{ direction }}/4.png")'}),
    style({backgroundImage: 'url("assets/animations/builder/builder_{{ direction }}/5.png")'}),
    style({backgroundImage: 'url("assets/animations/builder/builder_{{ direction }}/6.png")'}),
    style({backgroundImage: 'url("assets/animations/builder/builder_{{ direction }}/5.png")'}),
    style({backgroundImage: 'url("assets/animations/builder/builder_{{ direction }}/4.png")'}),
    style({backgroundImage: 'url("assets/animations/builder/builder_{{ direction }}/3.png")'}),
    style({backgroundImage: 'url("assets/animations/builder/builder_{{ direction }}/2.png")'})
  ]))
]);

/**
 * One cycle builder animation, to make this work in loop use animation event to change
 * animation state after animation is done.
 *
 * @example
 * Html:
 *
 * <div [@triggerName]="state" (@triggerName.done)="onAnimationDone($event)"></div>
 *
 * TypeScript:
 *
 * state = 'false';
 *
 * onAnimationDone(event): void {
 *   this.state = event.fromState;
 * }
 *
 * It will change state with 'false' and 'true' values which will kick off the transition
 *
 * @param triggerName Name of trigger to use with html element => [@triggerName]
 * @param direction Specify builder building direction => 'up | right | down | left'
 * @return An object that contains the animation trigger.
 */
export const BUILDER = (triggerName: string, direction: string): AnimationTriggerMetadata => {
  return trigger(triggerName, [
    transition('* <=> *', [
      style({
        width: '79px',
        height: '50px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom'
      }),
      useAnimation(BUILDER_ANIMATION, {
        params: {
          direction,
          easing: direction === 'up' || direction === 'down' ? 'ease-in' : 'ease-out'
        }
      })
    ])
  ]);
};
