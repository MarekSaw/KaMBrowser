import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'page-loading',
  templateUrl: './page-loading.component.html',
  styleUrls: ['./page-loading.component.css'],
  animations: [
    trigger('spinner', [
      state('state1', style({})),
      state('state2', style({})),
      transition('state1 => state2', [
        animate('100ms')
      ]),
      transition('state2 => state1', [
        animate('100ms')
      ])
    ])
  ]
})
export class PageLoadingComponent implements OnInit {

  public animationState: string;
  public spinnerImageNumber: number;
  public spinnerImageSource: string;
  @Input('Enable') public isAnimationEnabled: boolean;
  @Input('zIndex') public zIndex: number;

  constructor() { }

  ngOnInit(): void {
    this.animationState = 'state1';
    this.spinnerImageNumber = 1;
    this.spinnerImageSource = 'assets/animations/spinner1.png';
  }

  public onDone(): void {
    if (this.isAnimationEnabled) {
      this.toggleSpinnerImage();
      this.toggleAnimationState();
    }
  }

  private toggleSpinnerImage(): void {
    this.spinnerImageNumber === 8 ? this.spinnerImageNumber = 1 : this.spinnerImageNumber++;
    this.spinnerImageSource = `assets/animations/spinner${this.spinnerImageNumber}.png`;

  }

  private toggleAnimationState(): void {
    this.animationState = this.animationState === 'state1' ? 'state2' : 'state1';
  }

}
