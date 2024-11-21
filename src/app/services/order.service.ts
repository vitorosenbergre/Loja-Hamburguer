import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  
})

export class OrderService {
  
  // Lista de hambúrgueres disponíveis com título e descrição
  private burgers = [
    { title: 'X-Vegan', description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese' },
    { title: 'X-Vegan Special', description: 'Pão integral, hambúrguer vegetal, cebola caramelizada' },
    { title: 'X-Vegan Deluxe', description: 'Pão de brioche, hambúrguer vegetal, queijo vegano' },
    { title: 'X-Fitness', description: 'Pão integral, hambúrguer de frango, alface, tomate' },
    { title: 'X-Fitness Plus', description: 'Pão integral, hambúrguer de frango, queijo light' },
    { title: 'X-Fitness Deluxe', description: 'Pão integral, hambúrguer de frango grelhado' },
    { title: 'X-Infarto', description: 'Pão, hambúrguer duplo, bacon, cheddar, ovo, maionese' },
    { title: 'X-Infarto Premium', description: 'Pão, hambúrguer duplo, bacon, queijo cheddar' },
    { title: 'X-Infarto Special', description: 'Pão, hambúrguer duplo, cheddar, ovo frito' },
  ];

  // Objeto que armazena os dados do pedido, com valores iniciais
  private orderData = {
    produto1: '',
    quantidade1: 0,
    produto2: '',
    quantidade2: 0,
    observacao: ''
  };

  // Método para salvar os dados do pedido
  // Recebe os parâmetros do produto, quantidade e observação e os armazena no objeto orderData
  setOrderData(produto1: string, quantidade1: number, produto2: string, quantidade2: number, observacao: string): void {
    this.orderData = { produto1, quantidade1, produto2, quantidade2, observacao };  // Atualiza os dados do pedido
  }

  // Método para obter os dados do pedido
  // Retorna o objeto orderData contendo as informações do pedido
  getOrderData() {
    return this.orderData;  // Retorna os dados do pedido armazenados
  }

  constructor() {}

  // Método para retornar a lista de hambúrgueres disponíveis
  // Esse método pode ser usado para exibir os hambúrgueres na interface
  getBurgers() {
    return this.burgers;  // Retorna a lista de hambúrgueres
  }
}
