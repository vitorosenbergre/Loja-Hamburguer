import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',  
  styleUrls: ['./card.component.css']    
})
export class CardComponent {
  @Input() title: string = '';  // Título do card, sendo uma string que pode ser passada como parâmetro
  @Input() description: string = ''; // Descrição do card, também uma string passada como parâmetro
  @Input() imageUrl: string = ''; // URL da imagem que será exibida no card, passada como parâmetro
}
