import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { UserListModule } from './user-list/user-list.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoginModule,
    RegisterModule,
    UserListModule
  ]
})
export class HomeModule { }
