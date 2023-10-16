import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    HomeComponent,
    HeaderComponent,
    ProductsComponent,
    AddUserComponent,
    ErrorPageComponent,
    UpdateUserComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
