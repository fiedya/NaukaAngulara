import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageHomeComponent } from './home-page-home/home-page-home.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  declarations: [HomePageHomeComponent]
})
export class HomePageModule { }
