import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';



@NgModule({
  declarations: [
    BoardUserComponent,
    BoardAdminComponent,
    BoardModeratorComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BoardModule { }
