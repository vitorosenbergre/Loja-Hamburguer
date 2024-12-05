import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService, Category, Product } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  category: Category | null = null;  // Categoria selecionada
  products: Product[] = [];          // Produtos da categoria

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService, // Serviço para obter dados de categorias e produtos
    private router: Router // Serviço de roteamento
  ) {}

  ngOnInit(): void {
    // Obtém o ID da categoria da URL
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    
    if (categoryId) {
      // Busca a categoria com base no ID e atualiza os produtos
      this.categoryService.getCategoryById(categoryId).subscribe((category: Category) => {
        this.category = category;          // Atualiza a categoria
        this.products = category.products; // Atualiza os produtos da categoria
      });
    }
  }

  // Método para navegar para a página de detalhes do produto
  goToProductDetails(product: Product) {
    this.router.navigate(['/detail'], {
      queryParams: {
        title: product.name,
        description: product.baseDescription,
        image: product.pathImage,
        price: product.price,
        descriptionfull: product.fullDescription
      }
    });
  }
}
