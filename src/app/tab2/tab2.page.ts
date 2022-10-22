import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { IMemoria } from '../models/IMemoria.model';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  operacao = '';
  resultado = '';
  numero = false;
  caracter = true;
  caracteres = ['-', '*', '/', '+', '.']

  memoria: IMemoria[] = [];


  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  adicionarValor(valor: string) {
    this.caracter = this.caracteres.includes(valor)
    if (!this.caracter) {
      this.operacao += valor;
      this.numero = true;
    } else if (this.caracter && this.numero) {
      this.operacao += valor;
      this.numero = false;
    }
  }

  limparMemoria() {
    this.operacao = '';
    this.resultado = '';
    this.numero = false;

  }

  limparOperacao() {
    this.operacao = '';
    this.numero = false;

  }

  inverterValor() {

  }

  apagarCaracter() {
    if (this.operacao.length > 0) {
      this.operacao = this.operacao.substring(0, this.operacao.length - 1);
    }

    const ultimo = this.operacao.substring(this.operacao.length, 1);
    this.caracter = this.caracteres.includes(ultimo);
    console.log(ultimo);

    if (!this.caracter) {
      this.numero = true;
    } else {
      this.numero = false;
    }
  }

  realizarOperacao() {
    try {
      this.resultado = evaluate(this.operacao);
    } catch (error) {
      this.resultado = 'Inválido!';
    }
  }

  salvarMemoria() {
    if (this.operacao != '' && this.resultado != '') {
      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado)
      };
      this.memoria.push(memoria);
    } else if (this.operacao != '' && this.resultado == '') {
      this.realizarOperacao();

      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado)

      };
      this.memoria.push(memoria);
    } else {
      this.presentAlert('Atenção!!!!', 'Digite uma operação!')
    }
    console.log(this.memoria);
  }
  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }

  esvaziarMemoria(){

  };

  adicionarMemoria(){

  };

  removerMemoria(){

  };
  mostrarMemoria(){
    if(this.memoria !=[]){
      console.log(this.memoria);
    } else{this.presentAlert('Atenção!!!!', 'Memória vazia')}

  }
  chamarMemoria(){}

  
}

