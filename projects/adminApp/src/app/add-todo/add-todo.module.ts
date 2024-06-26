import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTodoPageRoutingModule } from './add-todo-routing.module';

import { AddTodoPage } from './add-todo.page';
import { FirebaseLibModule } from 'firebase-lib';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTodoPageRoutingModule,
    FirebaseLibModule,
  ],
  declarations: [AddTodoPage],
})
export class AddTodoPageModule {}
