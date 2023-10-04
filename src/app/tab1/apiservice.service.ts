import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  ServiceBaseUrl='http://192.168.1.25:3001'
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
    var url = this.ServiceBaseUrl +"/heros_List";
    return this.http.get(url);
  }
  herodataByID(id:any)
  { 
    const requestData = { id }; 
    var url = this.ServiceBaseUrl +"/hero_detail";
    return this.http.post(url,requestData);
  }
  logout()
  {
    localStorage.clear();
    this.router.navigateByUrl('');
   
  }
}
