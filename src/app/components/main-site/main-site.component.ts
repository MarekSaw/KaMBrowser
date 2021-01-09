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

  private windowScrollPercent: number;
  private parallaxFoodProductionScrollPercent: number;
  private parallaxTitleScrollPercent: number;
  private contentScrollPercent: number;
  private isWindowScrolledTo = false;

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
    // console.log(e.target.scrollingElement.scrollTop);


    const scrollTop = e.target.scrollingElement.scrollTop;
    console.log('window scroll top' + scrollTop);
    const docHeight = e.target.scrollingElement.scrollHeight;
    const clientHeight = e.target.scrollingElement.clientHeight;
    const contentHeight = docHeight - clientHeight;
    const scrollPercent = scrollTop / contentHeight;

    this.windowScrollPercent = Math.round((scrollPercent * 100 + Number.EPSILON) * 100) / 100;
    console.log(this.windowScrollPercent + '%');



    // if (this.windowScrollPercent <= 34.44) {
    //
    //   document.getElementById('parallax-food-production').scrollTop = 0;
    //   document.getElementById('parallax-food-production').style.overflowY = 'hidden';
    //   this.isWindowScrolledTo = false;
    // } else if (this.windowScrollPercent > 34.44) {
    //   document.getElementById('parallax-food-production').style.overflowY = 'auto';
    //   if (this.parallaxFoodProductionScrollPercent < 99) {
    //   window.scrollTo(0, 34.45 / 100 * contentHeight);
    //   console.log('test scroll to ' + 34.45 / 100 * contentHeight);
    //   }
    // }


  }

  public onContentScroll(): void {
    this.contentScrollPercent = this.scrollPercentForElementById('main-site-content');
    console.log('contentScrollPercent ' + this.contentScrollPercent + '%');
  }



  public  onParallaxTitleScroll(): void {
    this.parallaxTitleScrollPercent = this.scrollPercentForElementById('parallax-title');
    console.log('scrollPercentTitle ' + this.parallaxTitleScrollPercent + '%');


  }

  public onParallaxFoodProductionScroll(): void {

    this.parallaxFoodProductionScrollPercent = this.scrollPercentForElementById('parallax-food-production');
    console.log('scrollPercentFood ' + this.parallaxFoodProductionScrollPercent + '%');


    if (this.parallaxFoodProductionScrollPercent > 20
    ) {
      console.log('nastąpiłą zmiana opacity');
      document.getElementById('scroll-layer-1').style.opacity = '0.2';
    }

  }

  private scrollPercentForElementById(id: string): number {
    const parallaxFoodProduction = document.getElementById(id);
    const scrollTop = parallaxFoodProduction.scrollTop;
    const offsetHeight = parallaxFoodProduction.offsetHeight;
    const scrollHeight = parallaxFoodProduction.scrollHeight;

    return Math.round((scrollTop / (scrollHeight - offsetHeight)) * 100);
  }



}
