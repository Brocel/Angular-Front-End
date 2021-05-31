import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { UserListModule } from './user-list/user-list.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    HomeRoutingModule,
    LoginModule,
    RegisterModule,
    UserListModule
  ]
})
export class HomeModule { }
