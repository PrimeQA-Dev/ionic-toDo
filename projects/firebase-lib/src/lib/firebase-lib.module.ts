import { NgModule } from '@angular/core';
import { FirebaseLibComponent } from './firebase-lib.component';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAc8ySYG9fa0WfEhKBD15GDgeNZSSf0B5Q',
  authDomain: 'ionic-todo-app-2311d.firebaseapp.com',
  projectId: 'ionic-todo-app-2311d',
  storageBucket: 'ionic-todo-app-2311d.appspot.com',
  messagingSenderId: '667355279063',
  appId: '1:667355279063:web:fa5f2f1d8d98f6d8044a92',
  measurementId: 'G-EMDH8W486X',
};

initializeApp(firebaseConfig, 'firebase-lib');

@NgModule({
  declarations: [FirebaseLibComponent],
  imports: [],
  exports: [FirebaseLibComponent],
})
export class FirebaseLibModule {}
