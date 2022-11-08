import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})


export class MeuFormComponent implements OnInit {

  nome: string ='abc';

    pessoa: any ={
      nome:'Seu nome',
      idade:18

    }

  constructor() { }

  ngOnInit(): void {
  }

}
