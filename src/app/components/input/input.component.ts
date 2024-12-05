import { Component, OnInit } from '@angular/core';
import { CategoryService, Category, Product } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  categories: Category[] = [];            // Lista de categorias
  allProducts: Product[] = [];            // Todos os produtos das categorias
  filteredProducts: Product[] = [];       // Lista de produtos filtrados conforme o termo de busca
  searchTerm: string = '';                // Termo de busca do usuário
  showSuggestions: { [key: string]: boolean } = {};  // Controle para exibir ou não sugestões para cada input
  selectedProduct: { [key: string]: string } = {};   // Armazena o produto selecionado em cada input

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    // Carregar categorias e produtos ao iniciar
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
      // Agregar todos os produtos de todas as categorias
      this.allProducts = categories.flatMap(category => category.products);
    });
  }

  // Método que filtra os produtos com base no termo de pesquisa
  onSearchTermChange(inputId: string): void {
    if (this.selectedProduct[inputId]) {
      this.filteredProducts = this.allProducts.filter(product =>
        product.name.toLowerCase().includes(this.selectedProduct[inputId].toLowerCase())
      );
    } else {
      this.filteredProducts = [];
    }
  }

  // Exibe as sugestões quando o campo de input é focado
  onFocus(inputId: string): void {
    this.showSuggestions[inputId] = true;      // Exibe sugestões para o input atual
    this.filteredProducts = this.allProducts;  // Exibe todos os produtos quando o campo for clicado
  }

  // Método para selecionar um produto a partir da sugestão
  selectProduct(product: Product, inputId: string): void {
    this.selectedProduct[inputId] = product.name;  // Atualiza o input com o nome do produto selecionado
    this.showSuggestions[inputId] = false;         // Esconde as sugestões após a seleção
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
