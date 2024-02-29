import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../Models/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"Invoice/"
  constructor(private http : HttpClient) { }

  public saveInvoice(Invoice : Invoice)
  {
    return this.http.post(`${this.app_url}`,Invoice);
  }
  public getAllInvoices():Observable<Invoice[]>
  {
    return this.http.get<Invoice[]>(`${this.app_url}`);
  }
  public getInvoiceById(vid : number):Observable<Invoice>
  {
    return this.http.get<Invoice>(`${this.app_url}${vid}`);
  }
}
