import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  operacao = '';
  resultado = '';

  constructor() {}

  ngOnInit() {}

  adicionarValor(valor: any){
 /* var numero = null;
    var simbolo = null;

    if (this.operacao != '*'){
      numero = this.operacao;
      if (this.operacao != simbolo){
        this.operacao += numero;
      }
      
    } else {
      simbolo = this.operacao;
      if (this.operacao != numero){
        this.operacao += simbolo;
      }
    } */
    this.operacao += valor;
  }

  limparMemoria(){
    this.operacao = '';
    this.resultado = '';

  }

  limparOperacao(){
    this.operacao = '';

  }

  inverterValor(){

  }

  apagarCaracter() {
    if (this.operacao.length > 0){
      this.operacao = this.operacao.substring(0, this.operacao.length -1);
    }
  }

}
