import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  apiHost: string = './assets/static/products.json';
  products: any;

  getProducts():Observable<any> {
    return this.http.get(this.apiHost);
  }

  constructor(private http: HttpClient) { 
    this.getProducts().subscribe((res) => this.products = res);
  }

  ngOnInit(): void {}

}
