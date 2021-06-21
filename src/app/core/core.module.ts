import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HomeModule } from '@app/home/home.module';
import { FeatureModule } from '@app/feature/feature.module';

import { UserService } from '@app/core/service/user.service';
import { AuthService } from '@app/core/service/auth.service';
import { NavbarComponent } from './component/navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    SharedModule,
    HomeModule,
    FeatureModule
  ],
  providers:[
    UserService,
    AuthService
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
   if (parentModule) {
    throw new Error('CoreModule is already loaded. You should import core module only in the root module.');
  }
 }
}
