import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { FirebaseLibService } from 'firebase-lib';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage {
  title: string = '';
  description: string = '';
  dueDate: string;
  todo: any;

  constructor(
    private firebaseService: FirebaseLibService,
    private toastController: ToastController,
    private navCtrl: NavController,
    private router: Router
  ) {
    if (router.getCurrentNavigation()?.extras.state) {
      this.todo = this.router.getCurrentNavigation()?.extras.state;
      this.title = this.todo.title;
      this.description = this.todo.description;
      this.dueDate = this.todo.dueDate;
    } else {
      this.dueDate = new Date().toISOString();
    }
  }

  async createTodo() {
    try {
      const data = await this.firebaseService.addTodo(
        this.title,
        this.description,
        this.dueDate,
        ''
      );
      if (data) {
        const toast = await this.toastController.create({
          message: 'New ToDo added successfully!',
          duration: 2000,
        });
        toast.present();
        this.navCtrl.back();
      }
    } catch (e: any) {
      console.error('Error adding new todo: ', e);
      const toast = await this.toastController.create({
        message: e.message,
        duration: 3000,
      });
      toast.present();
    }
  }

  async updateTodo() {
    try {
      const data = await this.firebaseService.updateTodo(this.todo.id, {
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
      });

      const toast = await this.toastController.create({
        message: 'ToDo updated successfully!',
        duration: 2000,
      });
      toast.present();
      this.navCtrl.back();
    } catch (e: any) {
      console.error('Error updating todo: ', e);
      const toast = await this.toastController.create({
        message: e.message,
        duration: 3000,
      });
      toast.present();
    }
  }
}
