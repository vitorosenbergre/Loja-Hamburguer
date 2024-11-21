import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',  
  templateUrl: './contact.component.html',  
  styleUrls: ['./contact.component.css']  
})
export class ContactComponent {

  // Variáveis para armazenar os dados do formulário
  name: string = '';  // Nome do usuário
  email: string = '';  // E-mail do usuário
  phone: string = '';  // Número de telefone do usuário
  message: string = '';  // Mensagem do usuário
  feedbackMessage: string = '';  // Mensagem de feedback (sucesso ou erro) após envio do formulário

  // Função para validar o e-mail
  isEmailValid(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  // Expressão regular para validar e-mails
    return emailRegex.test(email);  // Retorna true se o e-mail for válido, caso contrário, retorna false
  }

  // Função para validar número de telefone (formato simples)
  isPhoneValid(phone: string): boolean {
    const phoneRegex = /^[0-9]{10,11}$/;  // Expressão regular para validar números com 10 ou 11 dígitos
    return phoneRegex.test(phone);  // Retorna true se o telefone for válido, caso contrário, retorna false
  }

  // Função para enviar o formulário
  submitForm() {
    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!this.name || !this.email || !this.phone || !this.message) {
      this.feedbackMessage = 'Dados incompletos. Por favor, preencha todos os campos.';  // Mensagem de erro se algum campo estiver vazio
      return;  // Interrompe a execução se algum campo estiver vazio
    }

    // Verificar a validade do e-mail
    if (!this.isEmailValid(this.email)) {
      this.feedbackMessage = 'E-mail inválido. Por favor, insira um e-mail válido.';  // Mensagem de erro se o e-mail não for válido
      return;  // Interrompe a execução se o e-mail for inválido
    }

    // Verificar a validade do telefone
    if (!this.isPhoneValid(this.phone)) {
      this.feedbackMessage = 'Número de telefone inválido. Por favor, insira um número válido.';  // Mensagem de erro se o telefone for inválido
      return;  // Interrompe a execução se o telefone for inválido
    }

    // Se todos os dados estiverem corretos
    this.feedbackMessage = 'Informações finalizadas, entraremos em contato.';  // Mensagem de sucesso após envio do formulário
    
    // Limpar o formulário após envio
    this.name = '';  // Limpa o campo de nome
    this.email = '';  // Limpa o campo de e-mail
    this.phone = '';  // Limpa o campo de telefone
    this.message = '';  // Limpa o campo de mensagem
  }
}
