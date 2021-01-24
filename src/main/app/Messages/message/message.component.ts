import {Component, Input, OnInit} from '@angular/core';
import {appProperties} from '../appProperties/appProperties';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }

  @Input() message;

  ngOnInit(): void {
    this.message = appProperties[this.message];
  }

}
