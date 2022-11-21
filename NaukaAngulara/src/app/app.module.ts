import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card'
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'
import {FormsModule} from "@angular/forms" 

 @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, 
    MatSelectModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
