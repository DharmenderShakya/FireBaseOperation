import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDeshboardComponent } from './components/admin-deshboard/admin-deshboard.component';

const routes: Routes = [
  {path:' ',component:AdminDeshboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
