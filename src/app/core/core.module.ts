import { NgModule } from '@angular/core';
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
export class CoreModule { }
