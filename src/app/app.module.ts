import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.services';
import { EmployeesModule } from './employees/employees.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, BrowserAnimationsModule, 
    HttpClientModule, 
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    EmployeesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
