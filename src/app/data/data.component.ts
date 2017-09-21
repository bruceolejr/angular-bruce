import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  private apiUrl = 'http://www.mocky.io/v2/590212490f00006b18d2cb05';
  data: any = {} ;
  test: Array<string> = [];

  constructor(private http: Http) {
    this.getContacts();
    this.getData();
   }

  getData() {
     return this.http.get(this.apiUrl)
       .map((res: Response) => res.json());
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.test = data;
      console.log(this.test);
      return(this.test);
    });
  }
}
