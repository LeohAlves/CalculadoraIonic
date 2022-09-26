import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  valor1: number;
  valor2: number;
  resultado: Number;
  conta: string;

  constructor(private alertController: AlertController) { }

  limpar(){
    this.valor1 = null;
    this.valor2 = null;
    this.resultado = null;
    this.conta = '';
  }

  async mostrarAlertSoma() {
    this.resultado = this.valor1 + this.valor2;
    this.conta = 'Soma';
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `<p> <strong>Valor 1: </strong> ${this.valor1}</p>
                <p><strong>Valor 2: </strong> ${this.valor2}</p>
                <p> <strong>Resultado: </strong> ${this.resultado} </p>`,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertSub() {
    this.conta = 'Subtração';
    this.resultado = this.valor1 - this.valor2;
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `<p> <strong> Valor 1: </strong> ${this.valor1}</p>
                <p><strong> Valor 2: </strong>  ${this.valor2}</p>
                <p><strong> Resultado: </strong> ${this.resultado} </p>`,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertMult() {
    this.conta = 'Multiplicação';
    this.resultado = this.valor1 * this.valor2;
    const alert = await this.alertController.create({
      header: 'Resultado',
      message:  `<p> <strong>Valor 1: </strong> ${this.valor1}</p>
                 <p><strong>Valor 2: </strong> ${this.valor2}</p>
                 <p> <strong>Resultado: </strong> ${this.resultado} </p>`,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertDiv() {
    this.resultado = this.valor1 / this.valor2;
    this.conta = 'Divisão';
    const alert = await this.alertController.create({
      header: 'Resultado',
      message:  `<p> <strong>Valor 1: </strong> ${this.valor1}</p>
                 <p><strong>Valor 2: </strong> ${this.valor2}</p>
                 <p> <strong>Resultado: </strong> ${this.resultado} </p>`,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertMaior() {
    this.conta = 'Maior';
    this.resultado = this.valor1 > this.valor2 ?this.valor1 : this.valor2; 
    const alert = await this.alertController.create({
      header: 'Resultado',
      message:  `<p> <strong>Valor 1: </strong> ${this.valor1}</p>
                 <p><strong>Valor 2: </strong> ${this.valor2}</p>
                 <p> <strong>Resultado: </strong> ${this.resultado} </p>`,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertMenor() {
    this.conta = 'Menor';
    this.resultado = this.valor1 < this.valor2 ? this.valor1 : this.valor2;
    const alert = await this.alertController.create({
      header: 'Resultado',
      message:  `<p> <strong>Valor 1: </strong> ${this.valor1}</p>
                 <p><strong>Valor 2: </strong> ${this.valor2}</p>
                 <p> <strong>Resultado: </strong> ${this.resultado} </p>`,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
