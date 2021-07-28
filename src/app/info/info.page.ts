import { Component, OnInit } from '@angular/core';
import {AlertController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  async onClick(){
    const alert = await this.alertController.create({
      message: "This app was made by Ariton Borova",
      buttons: ['OK']
    });
    await alert.present();
  }
}
