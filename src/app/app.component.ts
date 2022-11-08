import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces:true,
})
export class AppComponent {
 valor:number= 5;
 deletarCiclo:boolean = false;

 mudarValor(){
  this.valor++;
 }

 destruirCiclo(){
  this.deletarCiclo = true;
 }
}
