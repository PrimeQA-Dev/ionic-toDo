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
    private router: NavController,
    private toastController: ToastController
  ) {
    this.firebaseService.isUserLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigateForward(['/to-dos']);
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
        this.router.navigateForward(['/to-dos']);
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

  gotoSignup() {
    this.router.navigateForward(['/signup']);
  }
}
