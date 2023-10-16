import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path:"", redirectTo:"users", pathMatch:"full"},
  {path:"users", component:ListUserComponent, 
  children:[{path:"addUser", component:AddUserComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
