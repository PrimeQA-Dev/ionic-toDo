import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToDosPageRoutingModule } from './to-dos-routing.module';

import { ToDosPage } from './to-dos.page';
import { FirebaseLibModule } from 'firebase-lib';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDosPageRoutingModule,
    FirebaseLibModule,
  ],
  declarations: [ToDosPage],
})
export class ToDosPageModule {}
