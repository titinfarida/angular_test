import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  //const userData=[]

  proceedLogin(inputData: any){
    return this.http.post('', inputData);
  }

  isLoggedIn(){
    return localStorage.getItem('user')!= null;
  }

  getStorageItem(){
    return localStorage.getItem('user')!=null?localStorage.getItem('user'): '';
  }
}
