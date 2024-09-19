import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rute',
  templateUrl: './rute.page.html',
  styleUrls: ['./rute.page.scss'],
})
export class RutePage {

  pedidos = [
    { nombre: 'JUANABURGER', direccion: 'av. alfredo mendiola', detalles: '5 baldes', telefono: '123456789' },
    { nombre: 'JUANABURGER', direccion: 'av. alfredo mendiola', detalles: '5 baldes', telefono: '123456789' },
    { nombre: 'JUANABURGER', direccion: 'av. alfredo mendiola', detalles: '5 baldes', telefono: '123456789' }
  ];

  constructor(private navCtrl: NavController) {}

  generarRuta() {
    this.navCtrl.navigateForward('/maps');
  }
}

