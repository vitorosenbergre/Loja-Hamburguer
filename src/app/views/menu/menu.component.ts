// Importando os módulos necessários do Angular para criar o componente e lidar com navegação
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu', // O seletor define a tag HTML para usar este componente
  templateUrl: './menu.component.html', // Caminho do arquivo de template HTML associado ao componente
  styleUrls: ['./menu.component.css'] // Caminho do arquivo de estilo CSS associado ao componente
})
export class MenuComponent {
  // O array 'categories' contém um conjunto de categorias de hambúrgueres. Cada categoria tem um nome e um array de hambúrgueres. 
  // Cada hambúrguer tem um título, descrição e uma imagem associada.
  categories = [
    {
      category: 'X-Vegan',
      burgers: [
        { title: 'X-Vegan', description: 'Pão artesanal integral, hambúrguer de lentilha, alface e tomate', image: 'assets/images/hamburguer.png' },
        { title: 'X-Vegan Special', description: 'Pão integral, hambúrguer de grão-de-bico, tomate e molho especial', image: 'assets/images/hamburguer.png' },
        { title: 'X-Vegan Deluxe', description: 'Pão brioche, hambúrguer de cogumelos, rúcula e geleia de pimenta', image: 'assets/images/hamburguer.png' }
      ]
    },
    {
      category: 'X-Fitness',
      burgers: [
        { title: 'X-Fitness', description: 'Pão integral, hambúrguer de frango, alface e maionese light', image: 'assets/images/hamburguer.png' },
        { title: 'X-Fitness Plus', description: 'Pão integral, hambúrguer de frango, peito de peru e molho mostarda e mel', image: 'assets/images/hamburguer.png' },
        { title: 'X-Fitness Deluxe', description: 'Pão de centeio, hambúrguer de frango com espinafre, queijo cottage e maionese de abacate', image: 'assets/images/hamburguer.png' }
      ]
    },
    {
      category: 'X-Infarto',
      burgers: [
        { title: 'X-Infarto', description: 'Pão brioche, hambúrguer duplo, bacon, cheddar e maionese especial', image: 'assets/images/hamburguer.png' },
        { title: 'X-Infarto Premium', description: 'Pão australiano, hambúrguer duplo, cheddar extra, bacon e picles', image: 'assets/images/hamburguer.png' },
        { title: 'X-Infarto Special', description: 'Pão brioche, hambúrguer recheado, cheddar, ovo e gorgonzola', image: 'assets/images/hamburguer.png' }
      ]
    },
    {
      category: 'X-Gourmet',
      burgers: [
        { title: 'X-Gourmet Classic', description: 'Pão de brioche, hambúrguer de carne, queijo cheddar, alface e tomate', image: 'assets/images/hamburguer.png' },
        { title: 'X-Gourmet Premium', description: 'Pão de brioche, hambúrguer de carne, bacon crocante, queijo cheddar', image: 'assets/images/hamburguer.png' },
        { title: 'X-Gourmet Deluxe', description: 'Pão de brioche, hambúrguer de carne, molho especial, cebola caramelizada', image: 'assets/images/hamburguer.png' }
      ]
    },
    {
      category: 'X-Chicken',
      burgers: [
        { title: 'X-Chicken', description: 'Pão, hambúrguer de frango grelhado, alface, tomate, maionese', image: 'assets/images/hamburguer.png' },
        { title: 'X-Chicken BBQ', description: 'Pão, hambúrguer de frango, molho barbecue, alface', image: 'assets/images/hamburguer.png' },
        { title: 'X-Chicken Crispy', description: 'Pão, hambúrguer de frango empanado, alface, maionese', image: 'assets/images/hamburguer.png' }
      ]
    },
    {
      category: 'X-Bacon',
      burgers: [
        { title: 'X-Bacon Classic', description: 'Pão, hambúrguer de carne, bacon, alface, maionese', image: 'assets/images/hamburguer.png' },
        { title: 'X-Bacon Double', description: 'Pão, hambúrguer duplo, bacon, queijo cheddar', image: 'assets/images/hamburguer.png' },
        { title: 'X-Bacon Deluxe', description: 'Pão de brioche, hambúrguer duplo, bacon crocante, queijo cheddar', image: 'assets/images/hamburguer.png' }
      ]
    },
    {
      category: 'X-Veggie',
      burgers: [
        { title: 'X-Veggie', description: 'Pão integral, hambúrguer de grão-de-bico, alface, tomate', image: 'assets/images/hamburguer.png' },
        { title: 'X-Veggie Deluxe', description: 'Pão de brioche, hambúrguer de cogumelo, queijo vegano', image: 'assets/images/hamburguer.png' },
        { title: 'X-Veggie Burger', description: 'Pão integral, hambúrguer de feijão preto, alface, maionese', image: 'assets/images/hamburguer.png' }
      ]
    },
    {
      category: 'X-Cheese',
      burgers: [
        { title: 'X-Cheese', description: 'Pão, hambúrguer de carne, queijo cheddar, maionese', image: 'assets/images/hamburguer.png' },
        { title: 'X-Cheese Bacon', description: 'Pão, hambúrguer de carne, queijo cheddar, bacon crocante', image: 'assets/images/hamburguer.png' },
        { title: 'X-Cheese Deluxe', description: 'Pão de brioche, hambúrguer de carne, queijo cheddar, molho especial', image: 'assets/images/hamburguer.png' }
      ]
    }
  ];

  // Controla se todas as categorias devem ser exibidas ou não
  showAllCategories = false;

  // Construtor do componente, que injeta o serviço Router para navegação entre páginas
  constructor(private router: Router) {}

  // Método para navegar para a página "order" passando a categoria como parâmetro
  navigateToOrder(category: string): void {
    this.router.navigate(['/order', category]);
  }

  // Método para alternar entre mostrar 3 ou todas as categorias
  toggleCategories(): void {
    this.showAllCategories = !this.showAllCategories;
  }

  // Método que retorna as categorias que devem ser exibidas com base no estado da variável 'showAllCategories'
  getDisplayedCategories(): any[] {
    return this.showAllCategories ? this.categories : this.categories.slice(0, 3);
  }
}
