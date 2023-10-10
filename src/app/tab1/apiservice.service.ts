import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  ServiceBaseUrl='http://192.168.29.74:3001'
  userDetails = new Subject<any>();
  userLogin:boolean=false;
  // ServiceBaseUrl='http://192.168.37.13:3001'
  constructor(private http: HttpClient,private router :Router) { }

  loginservice(request:any)
  {
    var url = this.ServiceBaseUrl + "/login";
    return this.http
    .post(url, request)
  }
  RegisterUser(request:any)
  {
    var url = this.ServiceBaseUrl + "/Register";
    return this.http
    .post(url, request)
  }

  herosListService()
  {
    // var url = this.ServiceBaseUrl +"/products";
    var url = 'https://fakestoreapi.com/products';
    return this.http.get(url);
  }
  herodataByID(id:any)
  { 
    const requestData = { id }; 
    // var url = this.ServiceBaseUrl +"/product_detail";
    var url = 'https://fakestoreapi.com/products/'+id;
    // return this.http.post(url,requestData);
    return this.http.get(url);
  }
  hero_names_list(name:any)
  { 
    const requestData = { name }; 
    var url = this.ServiceBaseUrl +"/hero_names";
    return this.http.post(url,requestData);
  }
  addTocard(info:any)
  { 
    const requestData = { info }; 
    var url = this.ServiceBaseUrl +"/addTocard";
    return this.http.post(url,requestData);
  }
  logout()
  {
    localStorage.clear();
    this.router.navigateByUrl('');
   
  }

  categories()
  {
    let url ='https://fakestoreapi.com/products/categories';
    return this.http.get(url);

  }
  categories_filter(categories:any)
  {
    let url ='https://fakestoreapi.com/products/category/'+categories
    return this.http.get(url);
  }
}
