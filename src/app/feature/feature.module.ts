import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { FeatureRoutingModule } from './feature-routing.module';
import { UserInfoModule } from './user-info/user-info.module';
import { CharacterListModule } from './character-list/character-list.module';
import { GameListModule } from './game-list/game-list.module';
import { FeaturesHomeModule } from './features-home/features-home.module';
import { FeaturesHomeComponent } from './features-home/features-home/features-home.component';


@NgModule({
  declarations: [
    FeaturesHomeComponent
  ],
  imports: [
    SharedModule,
    FeatureRoutingModule,
    UserInfoModule,
    CharacterListModule,
    GameListModule,
    FeaturesHomeModule
  ]
})
export class FeatureModule { }
