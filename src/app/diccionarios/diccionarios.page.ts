import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-diccionarios',
  templateUrl: './diccionarios.page.html',
  styleUrls: ['./diccionarios.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class DiccionariosPage implements OnInit {
  constructor() {}

  ngOnInit() {
    const personas: Map<number, string> = new Map();

    // añadir elementos
    personas.set(1, 'Juan');
    personas.set(2, 'Pedro');
    personas.set(30, 'María');
    personas.set(4, 'Ana');

    // modificar
    personas.set(4, 'Ana María');

    // eliminar
    personas.delete(30);

    const personas2: Map<string, string> = new Map();
    // example of a dictionary
    personas2.set('Juan', 'Juan Pérez');
    personas2.set('Pedro', 'Pedro Gómez');
    personas2.set('María', 'María Rodríguez');

    console.log(personas2.get('María'));
  }
}
