import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private router :Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // let userDetails:any= localStorage.getItem("userDetails");
      let userDetails:any= localStorage.getItem("token");
      let login:boolean=false
    if(userDetails)
    {
      // userDetails=JSON.parse(userDetails);
      console.log('islogin',userDetails);
      if(userDetails)
      {
        login=true
      }else{
       
        login=false;

      }
    }else{
      this.router.navigateByUrl('/tabs/tab1/login');
      console.log('login',login)
    }
    console.log('login',login)
    return login;
  }
  
}
