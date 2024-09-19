import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { NavController } from '@ionic/angular'; // Para navegar hacia atrás

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map!: L.Map;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // Centrar el mapa en una ubicación inicial (por ejemplo, Lima)
    this.map = L.map('map').setView([-12.0464, -77.0428], 13);

    // Cargar el mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);
  }

  // Método para retroceder
  goBack() {
    this.navCtrl.back(); // Redirige a la página anterior
  }
}


