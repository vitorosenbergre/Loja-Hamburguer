import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BurgerService } from '../../services/burger.service';

// Definindo a interface 'Burger' que descreve a estrutura de um hambúrguer
interface Burger {
  title: string;
  description: string;
  image: string;
  price: string;
  descriptionfull: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
 
  category: string | null = null; // A variável que guarda a categoria selecionada (inicialmente nula)

  // Lista de categorias de hambúrgueres com seus respectivos itens
  categories = [
    {
      category: 'X-Vegan', // Categoria de hambúrgueres veganos
      burgers: [ // Array de hambúrgueres dessa categoria
        { title: 'X-Vegan', description: 'Pão artesanal integral, hambúrguer de lentilha, alface e tomate', image: 'assets/images/hamburguer.png', price: '35,00', descriptionfull: 'O X-Vegan é um hambúrguer 100% vegano que combina uma base de lentilha e beterraba para criar uma textura e sabor únicos. Servido em um pão artesanal integral, ele é acompanhado por alface americana crocante, tomate fresco e uma fatia de queijo vegano derretido. Para dar um toque especial, o hambúrguer é regado com molho de tomate caseiro levemente picante e finalizado com cebolas roxas caramelizadas e maionese de tofu temperada com limão e ervas frescas.'},
        { title: 'X-Vegan Special', description: 'Pão integral, hambúrguer de grão-de-bico, tomate e molho especial', image: 'assets/images/hamburguer.png', price: '36,00', descriptionfull: 'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.' },
        { title: 'X-Vegan Deluxe', description: 'Pão brioche, hambúrguer de cogumelos, rúcula e geleia de pimenta', image: 'assets/images/hamburguer.png', price: '37,00', descriptionfull: 'O X-Vegan Deluxe eleva a experiência vegana com um hambúrguer feito de cogumelos portobello, tofu defumado e nozes trituradas. Servido em pão brioche vegano, é complementado por rúcula fresca, tomates cereja marinados, queijo cremoso à base de castanha e fatias de cebola roxa. Um toque especial de geleia de pimenta e molho tahine com limão trazem um equilíbrio perfeito entre o doce, o picante e o cítrico.' }
      ]
    },
    {
      category: 'X-Fitness',
      burgers: [
        { title: 'X-Fitness', description: 'Pão integral, hambúrguer de frango, alface e maionese light', image: 'assets/images/hamburguer.png', price: '38,00', descriptionfull:'O X-Fitness é ideal para quem busca uma opção mais saudável, sem abrir mão do sabor. Feito com um hambúrguer grelhado de peito de frango, temperado com alho e ervas finas, ele é servido em um pão integral macio. Acompanhado por folhas de alface frescas, fatias de tomate orgânico, queijo branco light e maionese de iogurte desnatado, oferece uma experiência leve e nutritiva para qualquer hora do dia.' },
        { title: 'X-Fitness Plus', description: 'Pão integral, hambúrguer de frango, peito de peru e molho mostarda e mel', image: 'assets/images/hamburguer.png', price: '39,00', descriptionfull: 'O X-Fitness Plus é uma versão mais robusta do clássico saudável. Ele combina hambúrguer de frango grelhado, fatias de peito de peru defumado e queijo muçarela light. Servido em pão de grãos integrais, conta com alface crespa, cenoura ralada e um toque de molho de mostarda e mel caseiro, que adiciona uma nota levemente adocicada e refrescante ao conjunto.' },
        { title: 'X-Fitness Deluxe', description: 'Pão de centeio, hambúrguer de frango com espinafre, queijo cottage e maionese de abacate', image: 'assets/images/hamburguer.png', price: '40,00', descriptionfull: 'Uma opção premium para os amantes de hambúrgueres fitness. O X-Fitness Deluxe apresenta um hambúrguer artesanal de frango com espinafre e aveia, servido em pão de centeio macio. Acompanhado de rúcula, fatias de abacaxi grelhado, queijo cottage e maionese de abacate, é finalizado com um fio de azeite extravirgem e sementes de chia para um toque nutritivo e gourmet.' }
      ]
    },
    {
      category: 'X-Infarto',
      burgers: [
        { title: 'X-Infarto', description: 'Pão brioche, hambúrguer duplo, bacon, cheddar e maionese especial', image: 'assets/images/hamburguer.png', price: '41,00', descriptionfull: 'O lendário X-Infarto é uma explosão de sabores. Com dois hambúrgueres bovinos suculentos, queijo cheddar derretido, bacon crocante, fatias de ovo frito e cebolas caramelizadas, ele é servido em pão de brioche dourado. O destaque fica por conta de uma maionese especial de alho e um molho barbecue artesanal. Um hambúrguer feito para os corajosos que buscam uma experiência indulgente e saborosa.' },
        { title: 'X-Infarto Premium', description: 'Pão australiano, hambúrguer duplo, cheddar extra, bacon e picles', image: 'assets/images/hamburguer.png', price: '42,00', descriptionfull: 'O X-Infarto Premium traz o máximo de indulgência com dois hambúrgueres de 150g, bacon em tiras generosas, queijo cheddar extra e picles. Servido em pão australiano, conta ainda com um toque de cebolas crocantes fritas e uma camada de molho ranch. A mistura perfeita de texturas e sabores para quem quer se deliciar sem limites.' },
        { title: 'X-Infarto Special', description: 'Pão brioche, hambúrguer recheado, cheddar, ovo e gorgonzola', image: 'assets/images/hamburguer.png', price: '43,00', descriptionfull: 'Uma versão ainda mais luxuosa do clássico. O X-Infarto Special apresenta hambúrgueres recheados com queijo cheddar cremoso, bacon caramelizado e um ovo com gema mole que derrete no pão brioche. Acompanhado de alface americana, tomate picado e molho de gorgonzola, ele é finalizado com uma pitada de páprica defumada para um sabor intenso e marcante.' }
      ]
    },
    {
      category: 'X-Gourmet',
      burgers: [
        {
          title: 'X-Gourmet',
          description: 'Pão brioche, hambúrguer artesanal, queijo brie, rúcula e geleia de damasco',
          image: 'assets/images/hamburguer.png',
          price: '45,00',
          descriptionfull: 'O X-Gourmet é uma experiência sofisticada com um hambúrguer artesanal de 200g, temperado com ervas finas e servido em pão brioche dourado. Ele é acompanhado por queijo brie derretido, rúcula fresca e uma generosa camada de geleia de damasco. Para finalizar, um toque de molho de mostarda Dijon com mel, criando um equilíbrio perfeito entre o doce, o ácido e o salgado.'
        },
        {
          title: 'X-Gourmet Black',
          description: 'Pão australiano, hambúrguer bovino, queijo gouda e cebola caramelizada',
          image: 'assets/images/hamburguer.png',
          price: '46,00',
          descriptionfull: 'O X-Gourmet Black traz um hambúrguer bovino de alta qualidade, grelhado no ponto perfeito, servido em pão australiano macio. Ele é complementado por queijo gouda defumado, cebola caramelizada no vinho tinto e uma pitada de tomilho fresco. Um toque de maionese trufada completa essa obra-prima.'
        },
        {
          title: 'X-Gourmet Deluxe',
          description: 'Pão artesanal, hambúrguer Angus, queijo gruyère e molho especial',
          image: 'assets/images/hamburguer.png',
          price: '47,00',
          descriptionfull: 'Uma criação premium, o X-Gourmet Deluxe é feito com hambúrguer Angus grelhado, queijo gruyère e alface americana. Servido em pão artesanal, ele recebe um toque especial de molho à base de iogurte, alho confitado e azeite extravirgem. Finalizado com fatias de presunto cru e picles caseiro para uma explosão de sabores refinados.'
        }
      ]
    },
    {
      category: 'X-Chicken',
      burgers: [
        {
          title: 'X-Chicken',
          description: 'Pão brioche, hambúrguer de frango crocante, alface, tomate e maionese',
          image: 'assets/images/hamburguer.png',
          price: '32,00',
          descriptionfull: 'O X-Chicken é feito com um suculento hambúrguer de frango empanado e crocante, servido em pão brioche. Ele vem acompanhado por folhas de alface frescas, tomate fatiado e uma camada de maionese temperada com limão. Simples, delicioso e sempre uma escolha certeira.'
        },
        {
          title: 'X-Chicken Spicy',
          description: 'Pão brioche, hambúrguer de frango apimentado, alface, tomate e molho picante',
          image: 'assets/images/hamburguer.png',
          price: '33,00',
          descriptionfull: 'Para os amantes de pimenta, o X-Chicken Spicy traz um hambúrguer de frango empanado com especiarias picantes, servido em pão brioche. Ele é acompanhado de alface americana, tomate e um molho especial de maionese com jalapeños, garantindo um sabor vibrante e intenso.'
        },
        {
          title: 'X-Chicken Deluxe',
          description: 'Pão ciabatta, hambúrguer de frango grelhado, queijo suíço e molho pesto',
          image: 'assets/images/hamburguer.png',
          price: '35,00',
          descriptionfull: 'O X-Chicken Deluxe combina um hambúrguer de frango grelhado ao ponto com queijo suíço derretido e um toque de molho pesto artesanal. Servido em pão ciabatta levemente tostado, ele é complementado com rúcula fresca e tomate seco, criando uma combinação elegante e deliciosa.'
        }
      ]
    },
    {
      category: 'X-Bacon',
      burgers: [
        {
          title: 'X-Bacon',
          description: 'Pão brioche, hambúrguer bovino, bacon crocante e queijo cheddar',
          image: 'assets/images/hamburguer.png',
          price: '39,00',
          descriptionfull: 'O X-Bacon é o clássico dos clássicos. Feito com um hambúrguer bovino grelhado, bacon crocante, queijo cheddar derretido e maionese de alho, tudo isso servido em pão brioche tostado para garantir uma mordida irresistível.'
        },
        {
          title: 'X-Bacon Supreme',
          description: 'Pão australiano, hambúrguer bovino, cheddar duplo, bacon e barbecue',
          image: 'assets/images/hamburguer.png',
          price: '41,00',
          descriptionfull: 'O X-Bacon Supreme leva o clássico a um novo nível com hambúrguer bovino de 180g, cheddar duplo e tiras extras de bacon crocante. Servido em pão australiano macio, ele é finalizado com um toque de molho barbecue defumado para um sabor ainda mais intenso.'
        },
        {
          title: 'X-Bacon Deluxe',
          description: 'Pão brioche, hambúrguer recheado, bacon caramelizado e cebola crispy',
          image: 'assets/images/hamburguer.png',
          price: '43,00',
          descriptionfull: 'Uma combinação irresistível: o X-Bacon Deluxe apresenta um hambúrguer recheado com queijo cheddar, bacon caramelizado e cebola crispy. Tudo isso servido em pão brioche com uma camada de maionese temperada e molho de mostarda dijon.'
        }
      ]
    },
    {
      category: 'X-Veggie',
      burgers: [
        {
          title: 'X-Veggie',
          description: 'Pão integral, hambúrguer de grão-de-bico, alface, tomate e molho de iogurte',
          image: 'assets/images/hamburguer.png',
          price: '30,00',
          descriptionfull: 'O X-Veggie é uma opção saudável e saborosa, feito com hambúrguer de grão-de-bico levemente temperado. Ele é servido em pão integral com alface, tomate e um molho especial de iogurte com ervas, perfeito para quem busca uma alternativa leve e nutritiva.'
        },
        {
          title: 'X-Veggie Classic',
          description: 'Pão ciabatta, hambúrguer de lentilha, queijo vegano e molho de tomate',
          image: 'assets/images/hamburguer.png',
          price: '31,00',
          descriptionfull: 'Feito com um hambúrguer artesanal de lentilha e temperos especiais, o X-Veggie Classic é servido em pão ciabatta e complementado com queijo vegano derretido, molho de tomate caseiro e folhas de rúcula. Um clássico para veganos e vegetarianos.'
        },
        {
          title: 'X-Veggie Deluxe',
          description: 'Pão multigrãos, hambúrguer de quinoa, queijo de castanha e cebola roxa',
          image: 'assets/images/hamburguer.png',
          price: '32,00',
          descriptionfull: 'O X-Veggie Deluxe apresenta um hambúrguer de quinoa crocante servido em pão multigrãos. Ele é complementado com queijo de castanha, cebola roxa caramelizada e um toque de geleia de pimenta, proporcionando uma explosão de sabores.'
        }
      ]
    },
    {
      category: 'X-Cheese',
      burgers: [
        {
          title: 'X-Cheese',
          description: 'Pão brioche, hambúrguer bovino e muito queijo cheddar',
          image: 'assets/images/hamburguer.png',
          price: '34,00',
          descriptionfull: 'O X-Cheese é para os amantes de queijo! Um hambúrguer bovino suculento coberto por uma generosa porção de queijo cheddar derretido e servido em pão brioche levemente tostado.'
        },
        {
          title: 'X-Cheese Lovers',
          description: 'Pão brioche, hambúrguer bovino, cheddar duplo e queijo suíço',
          image: 'assets/images/hamburguer.png',
          price: '36,00',
          descriptionfull: 'O X-Cheese Lovers combina hambúrguer bovino grelhado com queijo cheddar duplo e uma camada de queijo suíço. Finalizado com maionese especial, ele é servido em pão brioche macio para uma experiência cheia de sabor.'
        },
        {
          title: 'X-Cheese Deluxe',
          description: 'Pão artesanal, hambúrguer Angus, queijo gorgonzola e cebola crispy',
          image: 'assets/images/hamburguer.png',
          price: '38,00',
          descriptionfull: 'O X-Cheese Deluxe é a combinação perfeita de hambúrguer Angus grelhado com queijo gorgonzola cremoso e cebola crispy. Servido em pão artesanal, é finalizado com um toque de molho barbecue picante.'
        }
      ]
    }
  ];

  // A variável filteredBurgers é um array do tipo Burger que irá armazenar a lista de hambúrgueres filtrados
  filteredBurgers: Burger[] = [];

  // O construtor recebe três dependências: ActivatedRoute, Router e BurgerService.
// - ActivatedRoute é utilizado para acessar informações sobre a rota atual, como parâmetros da URL.
// - Router é utilizado para navegar entre diferentes rotas da aplicação.
// - BurgerService é um serviço responsável por manipular dados relacionados aos hambúrgueres
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private burgerService: BurgerService
  ) {}

   // ngOnInit é um método do ciclo de vida do Angular que é executado quando o componente é inicializado.
  // Aqui, ele é usado para recuperar o parâmetro da rota (category) e filtrar os hambúrgueres com base nessa categoria.
  ngOnInit(): void {
    // Obtém o valor do parâmetro 'category' da URL usando o snapshot da rota.
    this.category = this.route.snapshot.paramMap.get('category');
    
    // Encontra a categoria selecionada na lista de categorias e filtra os hambúrgueres dessa categoria.
    const selectedCategory = this.categories.find(category => category.category === this.category);
    
    // Se uma categoria for encontrada, atribui seus hambúrgueres à variável filteredBurgers.
    if (selectedCategory) {
      this.filteredBurgers = selectedCategory.burgers;
    }
  }

   // Método para navegar para a página de detalhes de um hambúrguer específico.
  // Quando chamado, ele navega para a rota '/detail' passando informações sobre o hambúrguer como parâmetros de consulta.
  navigateToDetail(burger: Burger): void {
    this.router.navigate(['/detail'], { queryParams: { 
      title: burger.title, 
      description: burger.description, 
      image: burger.image,
      price: burger.price,
      descriptionfull: burger.descriptionfull 
    }});
  }
  
}
