import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Data } from '../services/data';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MoviesPage implements OnInit {

  keyword:string = "";

  constructor(private ds:Data) { }

  ngOnInit() {
    this.getKW();
  }

  async getKW() {
    this.keyword = await this.ds.get('kw');
  }


}
