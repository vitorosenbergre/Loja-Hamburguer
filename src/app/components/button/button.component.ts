import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-button',  
  templateUrl: './button.component.html',  
  styleUrls: ['./button.component.css']  
})

export class ButtonComponent {
  // A propriedade @Input permite que o componente receba dados de seu componente pai
  @Input() buttonType: 'primary' | 'secondary' | 'tertiary' | 'quarter' = 'primary';

  // Método que será chamado quando o botão for clicado
  onClick() {
    console.log('Button clicked!');
  }
}
