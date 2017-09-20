import { Component } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'Cases';
  private apiUrl = 'http://www.mocky.io/v2/590212490f00006b18d2cb05';
  data: any = {};

  constructor(private http: Http) {
    console.log('hi');
    this.getContacts();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl).subscribe(data => {;
      //.map((res: Response) => res.json);
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}
