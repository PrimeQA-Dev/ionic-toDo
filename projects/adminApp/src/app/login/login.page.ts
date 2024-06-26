import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FirebaseLibService } from 'firebase-lib';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  constructor(
    private firebaseService: FirebaseLibService,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {
    this.firebaseService.isUserLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        this.navCtrl.navigateForward(['/todos']);
      }
    });
  }

  async login() {
    try {
      const userData = await this.firebaseService.login(
        this.email,
        this.password
      );
      if (userData) {
        const toast = await this.toastController.create({
          message: 'User logged in successfully',
          duration: 3000,
        });
        toast.present();
        this.navCtrl.navigateForward(['/todos']);
      }
    } catch (e: any) {
      console.error('Error logging in user: ', e);
      const toast = await this.toastController.create({
        message: e.message,
        duration: 3000,
      });
      toast.present();
    }
  }
}
