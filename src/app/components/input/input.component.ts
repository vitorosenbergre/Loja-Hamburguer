import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

// Interface para definir a estrutura dos objetos hambúrgueres
interface Burger {
  title: string;
  description: string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  burgers: Burger[] = []; // Lista de hambúrgueres disponíveis
  filteredBurgers: Burger[] = [];  // Lista de hambúrgueres filtrados conforme o termo de busca
  searchTerm: string = '';         // Termo de busca do usuário
  showSuggestions: { [key: string]: boolean } = {}; // Controle para exibir ou não sugestões para cada input
  selectedProduct: { [key: string]: string } = {};  // Armazena o hambúrguer selecionado em cada input

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    // No início, pega todos os hambúrgueres disponíveis através do serviço
    this.burgers = this.orderService.getBurgers();
  }

  // Método que filtra os hambúrgueres com base no termo de pesquisa
  onSearchTermChange(inputId: string): void {
    // Se houver um produto selecionado, filtra os hambúrgueres conforme o termo de pesquisa
    if (this.selectedProduct[inputId]) {
      this.filteredBurgers = this.burgers
        .filter(burger => burger.title.toLowerCase().includes(this.selectedProduct[inputId].toLowerCase()));
    } else {
      // Se não houver seleção, esconde as sugestões
      this.filteredBurgers = [];
    }
  }

  // Exibe as sugestões quando o campo de input é focado
  onFocus(inputId: string): void {
    this.showSuggestions[inputId] = true; // Exibe sugestões para o input atual
    this.filteredBurgers = this.burgers;   // Exibe todos os hambúrgueres quando o campo for clicado
  }

  // Método para selecionar um hambúrguer a partir da sugestão
  selectBurger(burger: Burger, inputId: string): void {
    this.selectedProduct[inputId] = burger.title; // Atualiza o input com o nome do hambúrguer selecionado
    this.showSuggestions[inputId] = false;        // Esconde as sugestões após a seleção
  }

  // Método para esconder as sugestões quando o usuário sai do campo de input
  onBlur(inputId: string): void {
    setTimeout(() => {
      this.showSuggestions[inputId] = false; // Esconde as sugestões com um pequeno delay
    }, 200);
  }

  // Método para finalizar o pedido, com validação dos campos
  finalizeOrder(): void {
    // Obtém os valores dos campos do formulário
    const produto1 = this.selectedProduct['produto'];
    const quantidade1 = (document.getElementById('quantidade') as HTMLInputElement)?.value;
    const produto2 = this.selectedProduct['produto2'];
    const quantidade2 = (document.getElementById('quantidade2') as HTMLInputElement)?.value;
    const observacao = (document.getElementById('observacao') as HTMLTextAreaElement)?.value;

    // Validação dos campos obrigatórios
    if (!produto1 || !quantidade1 || !produto2 || !quantidade2 || !observacao) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Verifica se as quantidades são válidas (maiores que zero)
    if (Number(quantidade1) <= 0 || Number(quantidade2) <= 0) {
      alert('As quantidades devem ser maiores que zero.');
      return;
    }

    // Caso todos os campos estejam válidos, finaliza o pedido
    alert('Pedido validado com sucesso!');
    this.router.navigate(['/end']); // Navega para a página de finalização do pedido
  }
}
