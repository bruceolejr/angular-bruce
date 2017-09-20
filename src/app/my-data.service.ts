import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {
  private apiUrl = 'http://www.mocky.io/v2/590212490f00006b18d2cb05';
  data: any = {} ;

  constructor(private http: Http) {

  }
  fetchData(){
    this.getReturn();
    this.getData();
  }
  getData() {
    return this.http.get(this.apiUrl)
      .map((response) => response.json())
  }

  getReturn() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  // fetchData() {
  //   this.http.get(this.apiUrl).map(
  //     (response) => response.json()
  //   ).subscribe(
  //     (data) => console.log(data),
  //   );
  // }
}
