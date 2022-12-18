import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDeshboardComponent } from './components/admin-deshboard/admin-deshboard.component';


@NgModule({
  declarations: [
    AdminDeshboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
