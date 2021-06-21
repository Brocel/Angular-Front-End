import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HomeModule } from '@app/home/home.module';
import { FeatureModule } from '@app/feature/feature.module';

import { UserService } from '@app/core/service/user.service';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LogoutComponent } from './component/logout/logout.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    SharedModule,
    HomeModule,
    FeatureModule
  ],
  providers:[
    UserService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
   if (parentModule) {
    throw new Error('CoreModule is already loaded. You should import core module only in the root module.');
  }
 }
}
