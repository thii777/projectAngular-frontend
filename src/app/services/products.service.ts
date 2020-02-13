import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private readonly API = "http://172.26.0.54:3000/products"

  constructor( private http: HttpClient ) { }

  list(){
    return this.http.get<any[]>(`${this.API}`)
  }
  // create(){
  //   return this.http.post<any>(`${this.API}`)
  // }
}
