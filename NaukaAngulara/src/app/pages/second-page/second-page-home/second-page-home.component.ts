import { ConditionalExpr } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second-page-home',
  templateUrl: './second-page-home.component.html',
  styleUrls: ['./second-page-home.component.scss']
})
export class SecondPageHomeComponent implements OnInit {

  theme: string = '';
  @Output() changeThemeEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onThemeChange(event: any) {
    this.theme = event.value;
    this.changeThemeEvent.emit(this.theme);
    console.log(this.theme);
  }
}
