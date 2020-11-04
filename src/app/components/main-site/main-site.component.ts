import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSiteComponent implements OnInit {

  public activeImage = 'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true';
  public layer5Flags = '../../../assets/parallax/layer5Flags-1.png';
  public layer6Flags;
  public layersOfFood;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    let i = 1;

    setInterval(() => {
      this.layer5Flags = `../../../assets/parallax/layer5Flags-${i}.png`;
      this.layer6Flags = `../../../assets/parallax/layer6Flags-${i}.png`;
      this.layersOfFood = `../../../assets/parallax/parallax2-layer-${i}.png`;
      this.cdRef.detectChanges();
      if (i === 10) {
        i = 1;
      } else {
        i++;
      }
    }, 100);
  }


  @HostListener('window:scroll', ['$event']) onWindowScroll(e): void {
    console.log(e.target.scrollingElement.scrollTop);

    // Your Code Here

  }

  public onContentScroll(e: Event): void {
    console.log('parallax' + (e.target as Element).scrollTop);
  }


}
