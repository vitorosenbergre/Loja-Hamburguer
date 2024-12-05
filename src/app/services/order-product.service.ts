import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {
  private apiUrl = 'http://localhost:5001/api/orders';  // URL da API de pedidos, ajuste conforme necessário

  constructor(private http: HttpClient) {}

  // Método POST para criar o pedido
  createOrder(orderData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, orderData);
  }
}
