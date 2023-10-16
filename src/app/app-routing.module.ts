import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ProductsComponent } from './products/products.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';

const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"users", loadChildren:()=>import('./user/user.module').then(x=>x.UserModule)},
  {path:"editUser/:param", component:UpdateUserComponent},
  {path:"products", component:ProductsComponent},
  {path:"**", component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
