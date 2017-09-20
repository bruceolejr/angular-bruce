import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MyDataService } from './my-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule,
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
