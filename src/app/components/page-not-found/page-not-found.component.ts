import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';



@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  animations: [
    trigger('flagAnim', [
      state('state1', style({
      })),
      state('state2', style({
      })),
      transition('state1 => state2', [
        animate('100ms')
      ]),
      transition('state2 => state1', [
        animate('100ms')
      ]),
    ])
  ]
})
export class PageNotFoundComponent implements OnInit {

  public animationState = 'state1';
  public isAnimationEnabled = true;
  public flagImageNumber: number;
  public flagImage = '';
  public flagImageSource = ['assets/animations/flag_wide1.png', 'assets/animations/flag_wide2.png', 'assets/animations/flag_wide3.png',
                  'assets/animations/flag_wide4.png', 'assets/animations/flag_wide5.png', 'assets/animations/flag_wide6.png',
                  'assets/animations/flag_wide7.png', 'assets/animations/flag_wide8.png', 'assets/animations/flag_wide9.png',
                  'assets/animations/flag_wide10.png'];
  public millImageNumber: number;
  public millImage = '';
  public millImageSource = ['assets/animations/mill1.png', 'assets/animations/mill2.png', 'assets/animations/mill3.png',
                  'assets/animations/mill4.png', 'assets/animations/mill5.png', 'assets/animations/mill6.png',
                  'assets/animations/mill7.png', 'assets/animations/mill8.png', 'assets/animations/mill9.png',
                  'assets/animations/mill10.png'];


  constructor() { }

  ngOnInit(): void {
    this.flagImage = this.flagImageSource[0];
    this.flagImageNumber = 0;
    this.millImage = this.millImageSource[0];
    this.millImageNumber = 0;
  }

  public toggleFlagImage(): void {
    this.flagImage = this.flagImageSource[this.flagImageNumber];
    this.flagImageNumber++;
    if (this.flagImageNumber === this.flagImageSource.length - 1) {
      this.flagImageNumber = 0;
    }
  }

  public toggleMillImage(): void {
    this.millImage = this.millImageSource[this.millImageNumber];
    this.millImageNumber++;
    if (this.millImageNumber === this.millImageSource.length - 1) {
      this.millImageNumber = 0;
    }
  }

  public onDone($event): void {
    if (this.isAnimationEnabled) {
      this.toggleFlagImage();
      this.toggleMillImage();
      this.toggleState();
    }
  }

  public toggleState(): void {
    this.animationState = this.animationState === 'state1' ? 'state2' : 'state1';
  }


}
