import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { GaugeModule } from 'angular-gauge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field"


import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
 
  
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,   FormsModule,    AngularToastifyModule, 
  ToastrModule.forRoot() , BrowserAnimationsModule,],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
