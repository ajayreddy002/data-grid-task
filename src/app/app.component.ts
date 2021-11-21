import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data-grid-project';
  products: any[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }
  ngOnInit(): void {
    this.httpClient.get('/assets/data/data.json')
      .subscribe(
        (data: any) => {
          this.products = data.data
        }, err => {
          console.log(err)
        }
      )
  }
}
