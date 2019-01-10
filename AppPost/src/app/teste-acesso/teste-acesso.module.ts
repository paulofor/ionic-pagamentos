import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TesteAcessoPage } from './teste-acesso.page';

const routes: Routes = [
  {
    path: '',
    component: TesteAcessoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TesteAcessoPage]
})
export class TesteAcessoPageModule {}
