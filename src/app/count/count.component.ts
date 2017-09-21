import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  private apiUrl = 'http://www.mocky.io/v2/590212490f00006b18d2cb05';
  data: any = {} ;
  public test: Array<string> =[];

  constructor(private http: Http) {
    console.log(typeof(this.test));
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
      this.data = data;
      console.log(typeof(this.test));
      return(this.test);
    });
  }

  countData(value,text) {
    let x = 0;
    let count = 0;
      for (x = 0; x < value.length; x++) {
        if (value[x].service === text) {
          count++;
        }
      }
    return count;
  }

  ngOnInit() {
  }

}
