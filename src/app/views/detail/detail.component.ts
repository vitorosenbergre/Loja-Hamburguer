import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  burgerDetails: { 
    title: string; // Título do burger
    description: string; // Descrição curta do burger
    image: string; // URL da imagem do burger
    price: string; // Preço do burger
    descriptionfull: string; // Descrição completa do burger
  } | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Subscrição para obter os parâmetros da URL (queryParams)
    this.route.queryParams.subscribe(params => {
      this.burgerDetails = {
        title: params['title'],
        description: params['description'],
        image: params['image'],
        price: params['price'],
        descriptionfull: params['descriptionfull']
      };
    });
  }

    // Método que redireciona para a página de produto
    goToProductPage() {
      // Aqui você pode adicionar parâmetros extras se necessário
      this.router.navigate(['/product']);
    }
}
