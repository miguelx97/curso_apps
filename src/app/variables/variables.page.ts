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
  selector: 'app-variables',
  templateUrl: './variables.page.html',
  styleUrls: ['./variables.page.scss'],
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
export class VariablesPage implements OnInit {
  constructor() {}

  ngOnInit() {
    const years: number = 10;
    let name: string = 'John';
    name = 'Doe';

    name.toUpperCase();

    console.log(years);
  }
}
