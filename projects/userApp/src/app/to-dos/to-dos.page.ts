import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FirebaseLibService } from 'firebase-lib';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.page.html',
  styleUrls: ['./to-dos.page.scss'],
})
export class ToDosPage {
  constructor(
    private router: NavController,
    private firebaseService: FirebaseLibService,
    private toastController: ToastController
  ) {}
  toDos: any[] = [];

  async ionViewWillEnter() {
    try {
      this.toDos = [];
      const querySnapshot = await this.firebaseService.getToDos();
      querySnapshot.forEach((doc: any) => {
        this.toDos.push({ id: doc.id, ...doc.data() });
      });
    } catch (e) {
      console.error('Error fetching the documents: ', e);
    }
  }

  getDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  get visibleToDos() {
    return this.toDos;
  }
  gotoAddTodo() {
    this.router.navigateForward(['/add-todo']);
  }

  async logout() {
    try {
      await this.firebaseService.logout();
      const toast = await this.toastController.create({
        message: 'Logged out successfully',
        duration: 2000,
      });
      toast.present();
      this.router.navigateBack(['/login']);
    } catch (e) {
      console.error('Error logging out: ', e);
      const toast = await this.toastController.create({
        message: 'Error logging out',
        duration: 2000,
      });
      toast.present();
    }
  }
}
