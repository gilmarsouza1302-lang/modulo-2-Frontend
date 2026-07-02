import { registrar } from './autenticador.js';

const form = document.querySelector('#form-cadastro');
const aviso = document.querySelector('#aviso');

// Registrar o usuário ao enviar o formulário
form.addEventListener('submit', (evento) => {
   evento.preventDefault(); // Evita o envio do formulário o recarregamento da página

   const usuario = {
email: document.querySelector('#email').value,
senha: document.querySelector('#senha').value

   }
 try {
     registrar(usuario);
 } catch (error) {
     alert("Cadastro realizado! Faça login para acessar o sistema.");
     window.location.href = "login.html"; // Redireciona para a página de login
     aviso.textContent = error.message; // Exibe a mensagem de erro no elemento de aviso
     aviso.style.display = 'block';
 }
 });