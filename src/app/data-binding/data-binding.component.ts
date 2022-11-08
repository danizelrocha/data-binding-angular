import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

    url: string = 'http:loiane.com';
    cursoAngular: boolean = true;
    urlImagem = 'http://lorempixel.com.br/500/400/?2';

    valorAtual: string ='';
    valorSalvo: any;

    isMouseOver: boolean = false;

    nomeDoCurso: string = 'Angular';

    valorInicial = 15;

    getValor(): number{
      return 1;
    }

    getCurtirCurso(){
      return true;
    }


    botaoClicado(){
      alert('Botão clicado!');
    }
    onKeyUp(evento: any){
      console.log();
      this.valorAtual= (<HTMLInputElement>evento.target).value;
    }

    salvarValor(valor: any){
      this.valorSalvo = valor;
    }

    onMouseOverOut(){
      this.isMouseOver = !this.isMouseOver;
    }

    onMudouValor(evento: any){
      console.log(evento.novoValor);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
