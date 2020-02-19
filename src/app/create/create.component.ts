import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgForm} from '@angular/forms';
import { ProductsService } from '../services/products.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

  constructor(private router: Router, private productService: ProductsService ) { }

  selectedForm: Array<any>;

  ngOnInit(): void {
    this.onSubmit()
  }  
  
  dataForm(event){
    this.selectedForm = event.target.value;
  }

  async onSubmit(){ 
    const dataF = this.selectedForm
    await this.productService.post(dataF).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }
}