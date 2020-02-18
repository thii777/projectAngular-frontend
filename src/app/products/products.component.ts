import { Component, OnInit } from '@angular/core';
import { faUser, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  products: Array<any>;
  faUser = faUser;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor( private productService: ProductsService ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.productService.getAll().subscribe(data => this.products = data)
  }
}

