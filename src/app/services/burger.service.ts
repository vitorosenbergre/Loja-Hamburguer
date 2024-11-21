import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  
})

export class BurgerService {
  // Definindo uma propriedade privada que armazena o hambúrguer selecionado
  // Inicialmente, é nulo até que um hambúrguer seja selecionado
  private selectedBurger: { 
    title: string; 
    description: string; 
    image: string; 
    price: string; 
    descriptionfull: string 
  } | null = null;

  // Método para definir o hambúrguer selecionado
  // Recebe um objeto de hambúrguer com título, descrição, imagem, preço e descrição completa
  setSelectedBurger(burger: { title: string; description: string; image: string; price: string; descriptionfull: string }): void {
    this.selectedBurger = burger;  // Atribui o objeto hambúrguer à propriedade selectedBurger
  }

  // Método para obter o hambúrguer selecionado
  // Retorna o objeto de hambúrguer ou null caso nenhum hambúrguer tenha sido selecionado
  getSelectedBurger(): { title: string; description: string; image: string; price: string; descriptionfull: string  } | null {
    return this.selectedBurger;  // Retorna o hambúrguer selecionado ou null
  }
}
