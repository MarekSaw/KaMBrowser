import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.css']
})
export class MainSiteComponent implements OnInit {

  public scrollHeight: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  public onScroll(): void{
    const scrollHeight = this.scrollHeight.nativeElement as HTMLElement;
    console.log(' dupa ' + scrollHeight);
  }
}
