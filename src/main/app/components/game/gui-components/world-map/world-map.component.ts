import { Component, OnInit } from '@angular/core';
import {
  BUILDER
} from '../../../../animations/builder.animation';
import { WALKING, WORKER } from '../../../../animations/worker.animation';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss'],
  animations: [
    BUILDER('builderUp', 'up'),
    BUILDER('builderRight', 'right'),
    BUILDER('builderLeft', 'left'),
    BUILDER('builderDown', 'down'),
    WORKER('workerLeft', 'left', ''),
    WALKING('walk', '-500px', '2600ms')
  ]
})
export class WorldMapComponent implements OnInit {
  builderAnimationState = 'false';
  workerAnimationState = 'worker';

  constructor() {
  }

  ngOnInit(): void {

  }

  onAnimationDone(animation: any): void {
    if (animation.triggerName.includes('builder')) {
      this.builderAnimationState = animation.fromState;
    } else if (animation.triggerName.includes('worker')){
      this.workerAnimationState = animation.fromState;
    }
  }
}
