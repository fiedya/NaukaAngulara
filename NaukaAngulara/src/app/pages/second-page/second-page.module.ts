import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondPageHomeComponent } from './second-page-home/second-page-home.component';
import { SecondPageRoutingModule } from './second-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SecondPageRoutingModule
  ],
  declarations: [SecondPageHomeComponent]
})
export class SecondPageModule { }
