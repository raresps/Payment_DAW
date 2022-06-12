import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient} from "@angular/common/http";  


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private httpClient:HttpClient) { }

  readonly baseURL = 'https://localhost:44333/api/PaymentDetails' //move to .env
  formData:PaymentDetail = new PaymentDetail();
  list : PaymentDetail[];

  postPaymentDetails(){

    return this.httpClient.post(this.baseURL,this.formData);
  }

  putPaymentDetails(){

    return this.httpClient.put(`${this.baseURL}/${this.formData.id}`,this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.httpClient.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as PaymentDetail[])
  }
  
}
