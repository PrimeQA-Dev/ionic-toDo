import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FirebaseLibService } from 'firebase-lib';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage {
  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseLibService,
    private toastController: ToastController
  ) {
    this.filter = () => true;
  }
  toDos: any[] = [];
  filter: any;

  async ionViewWillEnter() {
    this.fetchToDos();
  }

  async fetchToDos() {
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
    return this.toDos.filter(this.filter);
  }

  gotoAddTodo() {
    this.navCtrl.navigateForward(['/add-todo']);
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.filter = (toDo: any) => {
      return (
        toDo.title.toLowerCase().includes(query) ||
        toDo.description.toLowerCase().includes(query)
      );
    };
  }

  async delete(todo: any) {
    try {
      this.firebaseService.deleteTodo(todo.id);
      const toast = await this.toastController.create({
        message: 'Todo deleted successfully',
        duration: 2000,
      });
      toast.present();
      this.fetchToDos();
    } catch (e) {
      console.error('Error deleting todo: ', e);
      const toast = await this.toastController.create({
        message: 'Error deleting todo',
        duration: 2000,
      });
      toast.present();
    }
  }

  async update(todo: any) {
    this.navCtrl.navigateForward(['/add-todo'], { state: todo });
  }

  async logout() {
    try {
      await this.firebaseService.logout();
      const toast = await this.toastController.create({
        message: 'Logged out successfully',
        duration: 2000,
      });
      toast.present();
      this.navCtrl.navigateBack(['/login']);
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
