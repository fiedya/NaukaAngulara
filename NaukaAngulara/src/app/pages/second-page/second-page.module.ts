import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondPageHomeComponent } from './second-page-home/second-page-home.component';
import { SecondPageRoutingModule } from './second-page-routing.module';
import { createApplication } from '@angular/platform-browser';
import { CardComponent } from 'src/app/components/card/card.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    SecondPageRoutingModule,
    MatCardModule,
    MatSelectModule,
    FormsModule
  ],
  declarations: [
    SecondPageHomeComponent,
    CardComponent
  ]
})
export class SecondPageModule { }
