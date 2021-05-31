import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { FeatureModule } from '../feature/feature.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    FeatureModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
   if (parentModule) {
    throw new Error('CoreModule is already loaded. You should import core module only in the root module.');
  }
 }
}