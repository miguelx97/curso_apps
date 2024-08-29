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
  selector: 'app-colecciones',
  templateUrl: './colecciones.page.html',
  styleUrls: ['./colecciones.page.scss'],
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
export class ColeccionesPage implements OnInit {
  constructor() {}

  ngOnInit() {
    let herramientas: string[] = [
      'Martillo',
      'Destornillador',
      'Llave inglesa',
      'Alicate',
      'Sierra',
      'Taladro',
    ];

    // agregar elemento
    herramientas.push('Cinta métrica');

    // eliminar primer elemento
    herramientas.shift();

    // eliminar último elemento
    herramientas.pop();

    // eliminar elemento concreto
    let herramientasSinDestornillador: string[] = [];
    herramientas.forEach((herramienta) => {
      if (herramienta !== 'Destornillador') {
        herramientasSinDestornillador.push(herramienta);
      }
    });

    console.log(herramientasSinDestornillador);

    // eliminar "destornillador"
    // herramientas = herramientas.filter(
    //   (herramienta) => herramienta !== 'Destornillador'
    // );
  }
}
