import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { FeatureRoutingModule } from './feature-routing.module';
import { UserInfoModule } from './user-info/user-info.module';
import { CharacterListModule } from './character-list/character-list.module';
import { GameListModule } from './game-list/game-list.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    FeatureRoutingModule,
    UserInfoModule,
    CharacterListModule,
    GameListModule
  ]
})
export class FeatureModule { }
