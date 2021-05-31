import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { UserListComponent } from './user-list.component';



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class UserListModule { }
