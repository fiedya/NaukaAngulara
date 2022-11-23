import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralLayoutHomeComponent } from './general-layout-home/general-layout-home.component';
import { NavigationBarComponent } from './general-layout-home/components/navigation-bar/navigation-bar.component';

import { GeneralLayoutRoutingModule } from './general-layout-routing.module';


@NgModule({
  imports: [
    CommonModule,
    GeneralLayoutRoutingModule

  ],
  declarations: [
    GeneralLayoutHomeComponent,
    NavigationBarComponent]
})
export class GeneralLayoutModule { }
