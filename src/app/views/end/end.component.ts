import { Component, OnInit } from '@angular/core';  
import { OrderService } from '../../services/order.service';  

@Component({
  selector: 'app-end',  
  templateUrl: './end.component.html',  
  styleUrls: ['./end.component.css']  
})
export class EndComponent implements OnInit {

  orderData: any = {};  // Variável para armazenar os dados do pedido (inicializada como um objeto vazio)

  constructor(private orderService: OrderService) {}  // Injeta o serviço OrderService no componente

  ngOnInit(): void {
    // Ao inicializar o componente (ngOnInit), chama o método getOrderData do serviço OrderService
    // para obter os dados do pedido e os armazena na variável orderData
    this.orderData = this.orderService.getOrderData();
  }
}
