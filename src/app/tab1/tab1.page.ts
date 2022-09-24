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
  maior: number;
  conta: string;

  constructor(private alertController: AlertController) {}
  

  async mostrarAlertSoma() {
    const alert = await this.alertController.create({
      
      header: 'Resultado',
      message: 'Valor 1:' + this.valor1 +
        '<br> Valor 2:' + this.valor2 +
        '<br> Resultado: ' + (this.resultado = this.valor1 + this.valor2),
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertSub() {
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: 'Valor 1: ' + this.valor1 +
        '<br> Valor 2: ' + this.valor2 +
        '<br> Resultado: ' + (this.resultado = this.valor1 - this.valor2),
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertMult() {
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: 'Valor 1: ' + this.valor1 +
        '<br> Valor 2: ' + this.valor2 +
        '<br> Resultado: ' + (this.resultado = this.valor1 * this.valor2),
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertDiv() {
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: 'Valor 1: ' + this.valor1 +
        '<br> Valor 2: ' + this.valor2 +
        '<br> Resultado: ' + (this.resultado = this.valor1 / this.valor2),
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertMaior() {
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: 'Maior: ' + this.maior,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mostrarAlertMenor() {
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
