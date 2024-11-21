import { Component } from '@angular/core';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-home',  
  templateUrl: './home.component.html',  
  styleUrls: ['./home.component.css']  
})
export class HomeComponent {
  // O construtor recebe uma instância do Router para permitir a navegação programática
  constructor(private router: Router) {}

  // Método navigateTo que recebe o nome de uma rota como argumento
  navigateTo(route: string): void {
    this.router.navigate([route]);  // Usa o Router para navegar até a rota especificada
  }
}
