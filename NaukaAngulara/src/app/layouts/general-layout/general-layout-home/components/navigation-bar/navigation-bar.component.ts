import { Component, OnInit } from '@angular/core';
import { AppRoutesNavigate } from 'src/app/constants/navigation-routes';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  pagePaths = AppRoutesNavigate;

  
  constructor() { }

  ngOnInit() {
  }

}
