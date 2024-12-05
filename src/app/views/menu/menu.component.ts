import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService, Category } from '../../services/category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categories: Category[] = [];
  showAllCategories = false;

  constructor(
    private router: Router,
    private categoryService: CategoryService // Serviço para obter categorias da API
  ) {}

  ngOnInit(): void {
    // Busca categorias da API ao inicializar o componente
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  // Navega para a página de pedidos da categoria
  navigateToOrder(category: Category): void {
    this.router.navigate(['/order', category.id]); // Navega para /order/:id
  }

  // Alterna entre mostrar todas ou apenas algumas categorias
  toggleCategories(): void {
    this.showAllCategories = !this.showAllCategories;
  }

  // Retorna as categorias para exibição, dependendo do estado de `showAllCategories`
  getDisplayedCategories(): Category[] {
    return this.showAllCategories ? this.categories : this.categories.slice(0, 3);
  }
}
