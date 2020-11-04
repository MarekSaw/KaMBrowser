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


  public layer5Flags: string;
  public layer6Flags: string;
  public layersOfFood: string;

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

    const scrollTop = e.target.scrollingElement.scrollTop;
    const docHeight = e.target.scrollingElement.scrollHeight - document.documentElement.offsetHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    const scrollPercentRounded = Math.round(scrollPercent * 100);
    console.log(scrollPercentRounded + '%');

  }

  public onContentScroll(): void {

    const scrollPercent = this.scrollPercentForElementById('parallax-food-production');
    console.log('scrollPercent ' + scrollPercent + '%');
  }

  private scrollPercentForElementById(id: string): number {
    const parallaxFoodProduction = document.getElementById(id);
    const scrollTop = parallaxFoodProduction.scrollTop;
    const offsetHeight = parallaxFoodProduction.offsetHeight;
    const scrollHeight = parallaxFoodProduction.scrollHeight;

    return Math.round((scrollTop / (scrollHeight - offsetHeight)) * 100);
  }



}
