import { Component, OnInit } from '@angular/core';
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

  constructor(
    private firebaseService: FirebaseLibService,
    private toastController: ToastController,
    private router: NavController
  ) {
    this.dueDate = new Date().toISOString();
  }

  async addTask() {
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
        this.router.back();
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
}
