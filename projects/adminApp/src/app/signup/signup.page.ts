import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FirebaseLibService } from 'firebase-lib';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
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

  async register() {
    try {
      const userData = await this.firebaseService.register(
        this.email,
        this.password
      );
      if (userData) {
        const toast = await this.toastController.create({
          message: 'User registered successfully',
          duration: 3000,
        });
        toast.present();
        this.navCtrl.navigateForward(['/todos']);
      }
    } catch (e: any) {
      console.error('Error registering user: ', e);
      const toast = await this.toastController.create({
        message: e.message,
        duration: 3000,
      });
      toast.present();
    }
  }

  gotoLogin() {
    this.navCtrl.back();
  }
}
