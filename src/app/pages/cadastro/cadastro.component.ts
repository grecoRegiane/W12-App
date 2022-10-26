import { Component} from '@angular/core';

@Component({
  selector: 'mt-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent{
  W12Project: any;
  form: any;

  ValidateEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let email = document.getElementById('formEmail') as HTMLInputElement | null
    if (email?.value.match(validRegex)) {
      return true;
    } else {
      alert("Insira um email valido!");
      return false;
    }
  }

  saveData(){
    let nome = document.getElementById('formNome') as HTMLInputElement | null
    let email = document.getElementById('formEmail') as HTMLInputElement | null
    let senha = document.getElementById('formSenha') as HTMLInputElement | null

    localStorage.setItem("W12Project_nome", JSON.stringify(nome?.value));
    localStorage.setItem("W12Project_email", JSON.stringify(email?.value));
    localStorage.setItem("W12Project_senha", JSON.stringify(senha?.value));
  }
}
