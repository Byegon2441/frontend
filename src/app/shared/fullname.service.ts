import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FullName } from './fullname.model';

@Injectable({
  providedIn: 'root'
})
export class FullnameService {

  
  constructor(private http: HttpClient) {}

  readonly baseURL = 'https://5987-110-49-74-82.ngrok.io/api/fullname';
  formData: FullName = new FullName();
  list: FullName[];

  postPaymentDetail(){
    alert(this.formData.username+this.formData.password+this.formData.userId)
    console.log(this.formData.username+this.formData.password+this.formData.userId)
   return this.http.post(this.baseURL,this.formData);
  }

  // putPaymentDetail(){
  //   return this.http.put(`${this.baseURL}/${this.formData.id}`,this.formData);
  // }

  // deletePaymentDetail(id:number){
  //   return this.http.delete(`${this.baseURL}/${id}`);
  // }

  // refreshList(){
  //   this.http.get(this.baseURL)
  //   .toPromise()
  //   .then(res => this.list  = res as FullName[])
  //   .then(res => console.log(this.list))
  //   // console.log(this.list);
  // }
}
