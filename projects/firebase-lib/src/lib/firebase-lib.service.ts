import { Injectable, OnInit } from '@angular/core';
import { getApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseLibService implements OnInit {
  app: any;
  auth: any;
  firestore: any;
  constructor() {
    this.app = getApp('firebase-lib');
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
  }
  ngOnInit(): void {}

  isUserLoggedIn(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      onAuthStateChanged(this.auth, (user: any) => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async addTodo(
    title: string,
    description: string,
    dueDate: string,
    attachment: any
  ) {
    return addDoc(collection(this.firestore, 'toDos'), {
      title: title,
      description: description,
      dueDate: dueDate,
      created: serverTimestamp(),
    });
  }

  async getToDos() {
    return getDocs(collection(this.firestore, 'toDos'));
  }

  async logout() {
    return this.auth.signOut();
  }
}
