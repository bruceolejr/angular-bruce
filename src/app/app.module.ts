import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { DataComponent } from './data/data.component';
import { CountComponent } from './count/count.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    CountComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
