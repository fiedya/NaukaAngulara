
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NaukaAngulara';
  theme = 'first-theme';

  constructor(
    private overlayContainer: OverlayContainer
  ) {

  }

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }
}

