import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {
  private apiUrl = 'http://www.mocky.io/v2/590212490f00006b18d2cb05';
  private cases: any = {} ;

  constructor(private http: Http) {

  }

  fetchData() {
    return this.http.get(this.apiUrl).map(
      (response) => response.json()
    ).subscribe(
      (data) => console.log(data),
    );
  }
}
