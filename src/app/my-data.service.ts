import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {
  private apiUrl = 'http://www.mocky.io/v2/590212490f00006b18d2cb05';
  data: any = {} ;
  cases: Array<string> = [];
  example = this.countData(this.cases);

  constructor(private http: Http) {
    this.http.get(this.apiUrl).map(
      (response) => response.json()
    ).subscribe(
      (data) => {
        console.log(data);
        this.cases = data;}
    );
  }

  countData(value) {
  let x = 0;
  let y = 0;
  let count =0;
     for (x = 0; y < value.length; y++) {
        if (value.service[y] === 'BV') {
          count++;
        }
     }
     return count;
   }
}
