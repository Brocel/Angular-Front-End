import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { UserListModule } from './user-list/user-list.module';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    LoginModule,
    RegisterModule,
    UserListModule
  ]
})
export class HomeModule { }
