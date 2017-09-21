import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-root',
  providers: [MyDataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private newService: MyDataService) {}
  
  title = 'Cases';
  test: any = {};

   ngOnInit() {
     this.test = this.newService.fetchData();
     
     //console.log( this.newService.fetchData());
     //console.log(this.test+'*');
   }
}
