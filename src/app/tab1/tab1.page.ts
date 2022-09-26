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
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado = 0;
  }

  async mostrarAlertSoma() {
    this.resultado = this.valor1 + this.valor2
    this.conta = 'soma';
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `<p>Valor 1: ${this.valor1}</p>
                <p>Valor 2: ${this.valor2}</p>
                <p>Resultado : ${this.resultado} </p>`,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertSub() {
    this.conta = 'Subtraçao';
    this.resultado = this.valor1 - this.valor2
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `<p>Valor 1: ${this.valor1}</p>
                <p>Valor 2: ${this.valor2}</p>
                <p>Resultado : ${this.resultado} </p>`,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertMult() {
    this.conta = 'Multiplicaçao';
    this.resultado = this.valor1 * this.valor2
    const alert = await this.alertController.create({
      header: 'Resultado',
      message:  `<p>Valor 1: ${this.valor1}</p>
                  <p>Valor 2: ${this.valor2}</p>
                  <p>Resultado : ${this.resultado} </p>`,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertDiv() {
    this.resultado = this.valor1 / this.valor2
    const alert = await this.alertController.create({
      header: 'Resultado',
      message:  `<p>Valor 1: ${this.valor1}</p>
                 <p>Valor 2: ${this.valor2}</p>
                 <p>Resultado : ${this.resultado} </p>`,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertMaior() {
    this.conta = 'Maior';
    this.resultado = this.valor1 > this.valor2 ?this.valor1 : this.valor2; 
    const alert = await this.alertController.create({
      header: 'Resultado',
      message:  `<p>Valor 1: ${this.valor1}</p>
                 <p>Valor 2: ${this.valor2}</p>
                <p>Resultado : ${this.resultado} </p>`,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertMenor() {
    this.conta = 'Menor numero';
    this.resultado = this.valor1 < this.valor2 ? this.valor1 : this.valor2;
    const alert = await this.alertController.create({
      header: 'Resultado',
      message:  `<p>Valor 1: ${this.valor1}</p>
                 <p>Valor 2: ${this.valor2}</p>
                <p>Resultado : ${this.resultado} </p>`,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
