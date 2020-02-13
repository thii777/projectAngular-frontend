import { Component, OnInit } from '@angular/core';
// import {Router} from "@angular/router";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  products: Array<any>;
  faUser = faUser;

  constructor( private productService: ProductsService ) { }

  // async gotoAdmin() {
  //   this.router.navigate(["admin"])
  // }

  ngOnInit(): void {
    this.list()

  }

  list(){
    this.productService.list().subscribe(data => this.products = data)
  }
}

