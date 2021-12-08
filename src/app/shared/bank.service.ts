import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bank } from './bank.model';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor(private http: HttpClient) {}

  readonly baseURL = 'https://localhost:5001/api/Bank';
  formData: Bank = new Bank();
  list: Bank[];

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(this.baseURL, this.formData);
  }

  deletePaymentDetail(id: string) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then((res) => (this.list = res as Bank[]))
      .then((res) => console.log(this.list));
    // console.log(this.list);
  }
}
