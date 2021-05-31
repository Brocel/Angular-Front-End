import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { UserListComponent } from '@app/home/user-list/user-list.component';



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
