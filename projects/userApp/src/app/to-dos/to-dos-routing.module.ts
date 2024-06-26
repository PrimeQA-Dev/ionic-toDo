import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDosPage } from './to-dos.page';

const routes: Routes = [
  {
    path: '',
    component: ToDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDosPageRoutingModule {}
