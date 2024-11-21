import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router';  

@Component({
  selector: 'app-detail',  
  templateUrl: './detail.component.html',  
  styleUrls: ['./detail.component.css']  
})

// Classe do componente DetailComponent
export class DetailComponent implements OnInit {
  // Define a estrutura para armazenar os detalhes do produto (burger)
  // Inicialmente, a variável burgerDetails é nula e vai ser preenchida com os parâmetros da URL
  burgerDetails: { 
    title: string; // Título do burger
    description: string; // Descrição curta do burger
    image: string; // URL da imagem do burger
    price: string; // Preço do burger
    descriptionfull: string; // Descrição completa do burger
  } | null = null; // Tipo que pode ser um objeto com os detalhes ou nulo

  // O construtor injeta os serviços necessários
  constructor(private route: ActivatedRoute, private router: Router) {}

  // Método de inicialização que é chamado assim que o componente é carregado
  ngOnInit(): void {
    // Subscrição para obter os parâmetros de consulta (queryParams) da URL
    this.route.queryParams.subscribe(params => {
      // Preenche a variável burgerDetails com os parâmetros de consulta
      this.burgerDetails = {
        title: params['title'], // Obtém o título do burger
        description: params['description'], // Obtém a descrição do burger
        image: params['image'], // Obtém a URL da imagem do burger
        price: params['price'], // Obtém o preço do burger
        descriptionfull: params['descriptionfull'] // Obtém a descrição completa do burger
      };
    });
  }

  // Método que realiza a navegação para a página de produto
  goToProductPage() {
    this.router.navigate(['/product']);  // Usa o Router para navegar para a página de produto
  }
}
