import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  products: Array<any>;

  ngOnInit(): void {
    // this.create
  }

  // create(){
  //   this.productService.create().subscribe(data => this.products = data)
  // }

}
